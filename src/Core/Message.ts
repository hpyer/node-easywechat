'use strict';

import ServerRequestInterface from "./Http/Contracts/ServerRequestInterface";
import HasAttributesMixin from "./Mixins/HasAttributesMixin";
import { applyMixins, parseXml } from "./Support/Utils";

/**
 * 消息对象
 */
class Message
{
  /**
   * 原始消息内容
   */
  protected originContent: string = '';

  constructor(attributes: Record<string, any>, originContent: string = '') {
    this.attributes = attributes;
    this.originContent = originContent;

    return new Proxy<Message>(this, {
      set: function (obj, key, val) {
        if (typeof key === 'symbol') key = key.toString();
        if (typeof obj[key] !== 'undefined') {
          obj[key] = val;
        }
        else {
          obj.set(key as string, val);
        }
        return true;
      },
      get: function (obj, key) {
        if (typeof key === 'symbol') key = key.toString();
        if (typeof obj[key] !== 'undefined') {
          return obj[key];
        }
        return obj.get(key as string);
      }
    });
  }

  /**
   * 根据请求内容生成消息对象
   * @param request
   * @returns
   */
  static async createFromRequest(request: ServerRequestInterface): Promise<Message> {
    let originContent = '';
    let body = request.getBody();
    if (body) {
      originContent = body.toString();
    }
    let attributes: Record<string, any> = {};
    if ('<' === originContent.substring(0, 1)) {
      attributes = await parseXml(originContent);
    }
    else {
      // Handle JSON format.
      try {
        attributes = JSON.parse(originContent);
      }
      catch (e) { }
    }

    if (Object.keys(attributes).length === 0) {
      throw new Error('Failed to decode request contents.');
    }

    return new Message(attributes, originContent);
  }

  /**
   * 获取原始消息内容
   * @returns
   */
  getOriginalContents(): string {
    return this.originContent;
  }

  /**
   * 转为字符串
   * @returns
   */
  toString(): string {
    return this.toJson();
  }

};

interface Message extends Recordable, HasAttributesMixin {
};

applyMixins(Message, [HasAttributesMixin]);

export = Message;
