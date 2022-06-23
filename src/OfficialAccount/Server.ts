'use strict';

import ServerRequestInterface from '../Core/Http/Contracts/ServerRequestInterface';
import Encryptor from '../Core/Encryptor';
import ServerInterface from '../Core/Contracts/ServerInterface';
import Response from '../Core/Http/Response';
import Message from './Message';
import { ServerEventType, ServerHandlerClosure, ServerMessageType } from '../Types/global';

class Server extends ServerInterface
{
  constructor(
    protected request: ServerRequestInterface = null,
    protected encryptor: Encryptor = null
  ) {
    super();
  }

  /**
   * 服务端消息处理
   * @returns
   */
  async serve(): Promise<Response> {
    let echostr: string = this.request.getQueryParams()['echostr'] || '';
    if (!!echostr) {
      return new Response(200, { 'Content-Type': 'text/html' }, echostr);
    }

    let message = await this.getRequestMessage(this.request);
    let query = this.request.getQueryParams();

    if (this.encryptor && query['msg_signature']) {
      this.prepend(this.decryptRequestMessage(query));
    }

    let response = await this.handle(new Response(200, {}, 'success'), message);

    if (!(response instanceof Response)) {
      response = await this.transformToReply(response, message, this.encryptor)
    }

    return response;
  }

  /**
   * 添加普通消息处理器
   * @param type
   * @param handler
   * @returns
   */
  addMessageListener(type: ServerMessageType, handler: ServerHandlerClosure): this {
    return this.withHandler(async function (message: Message, next: ServerHandlerClosure) {
      return message.MsgType === type ? handler(message, next) : next(message);
    })
  }

  /**
   * 添加事件消息处理器
   * @param event
   * @param handler
   * @returns
   */
  addEventListener(event: ServerEventType, handler: ServerHandlerClosure): this {
    return this.withHandler(async function (message: Message, next: ServerHandlerClosure) {
      return message.Event === event ? handler(message, next) : next(message);
    })
  }

  /**
   * 获取来自微信服务器的推送消息
   * @param request 未设置该参数时，则从当前服务端收到的请求中获取
   * @returns
   */
  getRequestMessage(request: ServerRequestInterface = null): Promise<Message> {
    return Message.createFromRequest(request || this.request);
  }

  protected decryptRequestMessage(query: Record<string, any>): ServerHandlerClosure {
    return async (message: Message, next: ServerHandlerClosure) => {
      if (!this.encryptor) return null;
      await this.decryptMessage(
        message,
        this.encryptor,
        query['msg_signature'] || '',
        query['timestamp'] || '',
        query['nonce'] || ''
      );

      return next(message);
    };
  }

};

export = Server;
