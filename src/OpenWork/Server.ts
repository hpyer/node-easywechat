'use strict';

import ServerRequestInterface from '../Core/Http/Contracts/ServerRequestInterface';
import Encryptor from '../Core/Encryptor';
import ServerInterface from '../Core/Contracts/ServerInterface';
import Response from '../Core/Http/Response';
import Message from './Message';
import { ServerEventType, ServerHandlerClosure, ServerMessageType } from '../Types/global';

class Server extends ServerInterface
{
  protected defaultSuiteTicketHandler: ServerHandlerClosure<Message> = null;

  constructor(
    protected encryptor: Encryptor,
    protected providerEncryptor: Encryptor,
    protected request: ServerRequestInterface = null,
  ) {
    super();
  }

  /**
   * 服务端消息处理
   * @returns
   */
  async serve(): Promise<Response> {
    let query = this.request.getQueryParams();
    if (!!query['echostr']) {
      let echostr = this.providerEncryptor.decrypt(
        query['echostr'],
        query['msg_signature'] ?? '',
        query['nonce'] ?? '',
        query['timestamp'] ?? ''
      );
      return new Response(200, { 'Content-Type': 'text/html' }, echostr);
    }

    let message = await this.getRequestMessage(this.request);

    this.prepend(this.decryptRequestMessage(query));

    let response = await this.handle(new Response(200, {}, 'success'), message);

    if (!(response instanceof Response)) {
      response = await this.transformToReply(response, message, this.encryptor)
    }

    return response;
  }

  withDefaultSuiteTicketHandler(handler: ServerHandlerClosure<Message>): this {
    this.defaultSuiteTicketHandler = function() {
      return handler.call(null, arguments);
    }
    return this.handleSuiteTicketRefreshed(handler);
  }

  /**
   * 设置联系人变化的消息处理器
   * @param handler
   */
  handleSuiteTicketRefreshed(handler: ServerHandlerClosure<Message>): this {
    if (this.defaultSuiteTicketHandler) {
      this.withoutHandler(this.defaultSuiteTicketHandler);
    }

    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'suite_ticket' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置授权成功的消息处理器
   * @param handler
   */
  handleAuthCreated(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'create_auth' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置变更授权的消息处理器
   * @param handler
   */
  handleAuthUpdated(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'change_auth' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置取消授权的消息处理器
   * @param handler
   */
  handleAuthCancelled(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'cancel_auth' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置用户创建的消息处理器
   * @param handler
   */
  handleUserCreated(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'change_contact' && message.ChangeType === 'create_user' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置用户更新的消息处理器
   * @param handler
   */
  handleUserUpdated(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'change_contact' && message.ChangeType === 'update_user' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置用户删除的消息处理器
   * @param handler
   */
  handleUserDeleted(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'change_contact' && message.ChangeType === 'delete_user' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置部门创建的消息处理器
   * @param handler
   */
  handlePartyCreated(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'change_contact' && message.ChangeType === 'create_party' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置部门更新的消息处理器
   * @param handler
   */
  handlePartyUpdated(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'change_contact' && message.ChangeType === 'update_party' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置部门删除的消息处理器
   * @param handler
   */
  handlePartyDeleted(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'change_contact' && message.ChangeType === 'delete_party' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置用户标签变化的消息处理器
   * @param handler
   */
  handleUserTagUpdated(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'change_contact' && message.ChangeType === 'update_tag' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置共享应用事件的消息处理器
   * @param handler
   */
  handleShareAgentChanged(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'share_agent_change' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置重置永久授权码的消息处理器
   * @param handler
   */
  handleResetPermanentCode(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.InfoType === 'reset_permanent_code' ? handler(message, next) : next(message);
    });
  }

  /**
   * 设置应用管理员变更的消息处理器
   * @param handler
   */
  handleChangeAppAdmin(handler: ServerHandlerClosure<Message>): this {
    return this.with(async function (message: Message, next: ServerHandlerClosure<Message>) {
      return message.MsgType === 'event' && message.Event === 'change_app_admin' ? handler(message, next) : next(message);
    });
  }

  /**
   * 获取来自微信服务器的推送消息
   * @param request 未设置该参数时，则从当前服务端收到的请求中获取
   * @returns
   */
  getRequestMessage(request: ServerRequestInterface = null): Promise<Message> {
    return Message.createFromRequest(request ?? this.request);
  }

  protected decryptRequestMessage(query: Record<string, any>): ServerHandlerClosure<Message> {
    return async (message: Message, next: ServerHandlerClosure<Message>) => {
      if (!this.encryptor) return null;
      await this.decryptMessage(
        message,
        this.encryptor,
        query['msg_signature'] ?? '',
        query['timestamp'] ?? '',
        query['nonce'] ?? ''
      );

      return next(message);
    };
  }

  /**
   * 获取解密后的消息
   * @param request 未设置该参数时，则从当前服务端收到的请求中获取
   * @returns
   */
  async getDecryptedMessage(request: ServerRequestInterface = null) {
    request = request ?? this.request;
    let message = await this.getRequestMessage(request);
    let query = request.getQueryParams();

    return await this.decryptMessage(
      message,
      this.encryptor,
      query['msg_signature'] ?? '',
      query['timestamp'] ?? '',
      query['nonce'] ?? ''
    );
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
