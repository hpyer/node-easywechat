'use strict';

import ServerInterface from '../Core/Contracts/ServerInterface';
import Response from '../Core/Http/Response';
import ServerRequestInterface from '../Core/Http/Contracts/ServerRequestInterface';
import MerchantInterface from './Contracts/MerchantInterface';
import Message from './Message';
import { AES, AES_GCM } from '../Core/Support/AES';
import { ServerHandlerClosure } from '../Types/global';
import { buildXml, createHash, parseXml } from '../Core/Support/Utils';

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

    let isV2Message = message.getOriginalContents().startsWith('<xml');

    try {
      let defaultResponse: Response;
      if (isV2Message) {
        defaultResponse = new Response(200, {}, buildXml({ return_code: 'SUCCESS', return_msg: '' }));
      }
      else {
        defaultResponse = new Response(200, {}, JSON.stringify({ code: 'SUCCESS', message: '成功' }));
      }
      let response = await this.handle(defaultResponse, message);

      if (!(response instanceof Response)) {
        response = defaultResponse;
      }

      return response;
    }
    catch (e) {
      if (isV2Message) {
        return new Response(200, {}, buildXml({ return_code: 'ERROR', return_msg: e.message }));
      }
      else {
        return new Response(200, {}, JSON.stringify({ code: 'ERROR', message: e.message }));
      }
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
    let attributes = await request.getParsedBody();

    if (originContent.startsWith('<xml')) {
      attributes = await this.decodeXmlMessage(attributes);
    }
    else {
      attributes = this.decodeJsonMessage(attributes);
    }

    return new Message(attributes, originContent);
  }

  protected async decodeXmlMessage(attributes: Record<string, any>) {
    if (attributes['req_info']) {
      let key = this.merchant.getV2SecretKey();
      if (!key) {
        throw new Error('V2 secret key is required');
      }
      attributes = await parseXml(AES.decrypt(
        attributes['req_info'],
        createHash(key, 'md5'),
        '',
        true,
        'aes-256-ecb'
      ).toString());
    }
    if (!attributes || Object.keys(attributes).length === 0) {
      throw new Error('Failed to decrypt request message');
    }
    return attributes;
  }

  protected decodeJsonMessage(attributes: Record<string, any>) {
    if (!attributes || Object.keys(attributes).length === 0) {
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
    return attributes;
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
      let isV2Message = message.getOriginalContents().startsWith('<xml');
      if (isV2Message) {
        return handler(message, next);
      }
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
