'use strict';

import { ServerHandlerClosure, ServerHandlerItem } from "../../Types/global";
import Message from "../Message";
import { createHash } from "../Support/Utils";

class HandlersMixin
{
  protected handlers: ServerHandlerItem[] = [];

  /**
   * 获取所有处理器
   * @returns
   */
  getHandlers(): ServerHandlerItem[] {
    return this.handlers;
  }

  /**
   * 创建处理器项
   * @param handler
   * @returns
   */
  createHandlerItem(handler: ServerHandlerClosure<Message>): ServerHandlerItem {
    return {
      hash: this.getHandlerHash(handler),
      handler: handler,
    }
  }

  /**
   * 计算处理器hash
   * @param handler
   * @returns
   */
  protected getHandlerHash(handler: ServerHandlerClosure<Message>): string {
    return createHash(handler.toString(), 'md5');
  }

  /**
   * @alias withHandler()
   */
  with(handler: ServerHandlerClosure<Message>): this {
    return this.withHandler(handler);
  }

  /**
   * 从最后添加处理器
   * @param handler
   * @returns
   */
  withHandler(handler: ServerHandlerClosure<Message>): this {
    this.handlers.push(this.createHandlerItem(handler));
    return this;
  }

  /**
   * @alias prependHandler()
   */
  prepend(handler: ServerHandlerClosure<Message>): this {
    return this.prependHandler(handler);
  }

  /**
   * 从最前添加处理器
   * @param handler
   * @returns
   */
  prependHandler(handler: ServerHandlerClosure<Message>): this {
    this.handlers.unshift(this.createHandlerItem(handler));
    return this;
  }

  /**
   * @alias withoutHandler()
   */
  without(handler: ServerHandlerClosure<Message>): this {
    return this.withoutHandler(handler);
  }

  /**
   * 删除处理器
   * @param handler
   * @returns
   */
  withoutHandler(handler: ServerHandlerClosure<Message>): this {
    let index = this.indexOf(handler);
    if (index > -1) {
      this.handlers.splice(index, 1);
    }
    return this;
  }

  /**
   * 获取处理器的索引
   * @param handler
   * @returns
   */
  indexOf(handler: ServerHandlerClosure<Message>): number {
    return this.handlers.findIndex((item: ServerHandlerItem) => {
      return item.hash === this.getHandlerHash(handler);
    });
  }

  /**
   * 当 value 为true或者返回true时，添加处理器
   * @param value
   * @param handler
   * @returns
   */
  when(value: boolean | Function | Promise<boolean>, handler: ServerHandlerClosure<Message>) {
    if (typeof value === 'function') {
      value = value.call(this) as boolean | Promise<boolean>;
    }

    if (typeof value === 'boolean' && value) {
      return this.withHandler(handler);
    }
    else if (typeof (value as Promise<boolean>).then === 'function') {
      (value as Promise<boolean>).then(val => {
        if (val) {
          return this.withHandler(handler);
        }
        return this;
      });
    }

    return this;
  }

  /**
   * 执行处理器
   * @param result
   * @param payload
   * @returns
   */
  async handle(result: any, payload: Message): Promise<any> {
    // 默认返回值处理函数
    let resultClosure: ServerHandlerClosure = async (p: Message): Promise<any> => { return result; };
    if (typeof result === 'function') {
      resultClosure = result;
    }

    let handlers = [...this.handlers];

    const nextClosure = async function (p: Message) {
      if (handlers.length > 0) {
        let item = handlers.shift();
        let closureRes = await item.handler(p, nextClosure);
        if (closureRes) return closureRes;
      }
      // 处理器无返回值则返回默认的返回值
      return await resultClosure(p);
    };

    // 开始处理
    return await nextClosure(payload);
  }

  /**
   * 判断处理器是否已存在
   * @param handler
   * @returns
   */
  has(handler: ServerHandlerClosure) {
    return this.indexOf(handler) > -1;
  }

};

export = HandlersMixin;
