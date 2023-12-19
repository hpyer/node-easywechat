'use strict';

import ServerInterface from '../Core/Contracts/ServerInterface';
import Response from '../Core/Http/Response';
import ServerRequestInterface from '../Core/Http/Contracts/ServerRequestInterface';
import MerchantInterface from './Contracts/MerchantInterface';
import Message from './Message';
import { AES_GCM } from '../Core/Support/AES';
import { ServerHandlerClosure } from '../Types/global';

class Server extends ServerInterface
{
  constructor(
    protected merchant: MerchantInterface = null,
    protected request: ServerRequestInterface = null,
  ) {
    super();
  }

  /**
   * 服务端消息处理
   * @returns
   */
  async serve(): Promise<Response> {
    let message = await this.getRequestMessage();

    try {
      let defaultResponse = new Response(200, {}, JSON.stringify({
        code: 'SUCCESS', message: '成功',
      }));
      let response = await this.handle(defaultResponse, message);

      if (!(response instanceof Response)) {
        response = defaultResponse;
      }

      return response;
    }
    catch (e) {
      return new Response(200, {}, JSON.stringify({
        code: 'ERROR', message: e.message,
      }));
    }
  }

  /**
   * 获取来自微信服务器的推送消息
   * @param request 未设置该参数时，则从当前服务端收到的请求中获取
   * @returns
   */
  async getRequestMessage(request: ServerRequestInterface = null): Promise<Message> {
    if (!request) {
      request = this.request;
    }
    let originContent = '';
    let body = request.getBody();
    if (body) {
      originContent = body.toString();
    }
    let attributes: Record<string, any> = {};
    try {
      attributes = JSON.parse(originContent);
    }
    catch (e) { }

    if (Object.keys(attributes).length === 0) {
      throw new Error('Invalid request body.');
    }
    if (!attributes['resource']['ciphertext']) {
      throw new Error('Invalid request.');
    }

    try {
      let decryptMessage = AES_GCM.decrypt(
        attributes['resource']['ciphertext'],
        this.merchant.getSecretKey(),
        attributes['resource']['nonce'],
        attributes['resource']['associated_data'],
      );
      attributes = JSON.parse(decryptMessage.toString());
    }
    catch (e) {
      throw new Error('Failed to decrypt request message.');
    }

    return new Message(attributes, originContent);
  }

  /**
   * 获取解密后的消息
   * @param request
   * @returns
   */
  getDecryptedMessage(request: ServerRequestInterface = null): Promise<Message> {
    return this.getRequestMessage(request);
  }

  /**
   * 处理付款回调
   * @param handler 消息处理器，需要接受两个参数，参数1是消息，参数2是下一个消息处理器
   * @returns
   */
  handlePaid(handler: ServerHandlerClosure<Message>): this {
    this.with(async (message: Message, next: ServerHandlerClosure<Message>) => {
      return message.getEventType() === 'TRANSACTION.SUCCESS' && message.trade_state === 'SUCCESS'
        ? handler(message, next) : next(message);
    });

    return this;
  }

  /**
   * 处理退款回调
   * @param handler 消息处理器，需要接受两个参数，参数1是消息，参数2是下一个消息处理器
   * @returns
   */
  handleRefunded(handler: ServerHandlerClosure<Message>): this {
    this.with(async (message: Message, next: ServerHandlerClosure<Message>) => {
      let eventType = message.getEventType();
      return [
        'REFUND.SUCCESS',
        'REFUND.ABNORMAL',
        'REFUND.CLOSED',
      ].findIndex(o => o === eventType) > -1 ? handler(message, next) : next(message);
    });

    return this;
  }

};

interface Server {
  with(next: ServerHandlerClosure<Message>): this;
  withHandler(next: ServerHandlerClosure<Message>): this;
  prepend(next: ServerHandlerClosure<Message>): this;
  prependHandler(next: ServerHandlerClosure<Message>): this;
  without(next: ServerHandlerClosure<Message>): this;
  withoutHandler(next: ServerHandlerClosure<Message>): this;
}

export = Server;
