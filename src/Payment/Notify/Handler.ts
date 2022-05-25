'use strict';

import BaseApplicatioin from "../../Payment/Application";
import { makeSignature, createHash, merge, buildXml, parseXml } from "../../Core/Utils";
import Response from "../../Core/Http/Response";
import { AES } from "../../Core/AES";

export default class Handler
{

  SUCCESS: string = 'SUCCESS';
  FAIL: string = 'FAIL';

  protected app: BaseApplicatioin = null;

  protected message: object = null;

  protected fail: string = null;

  protected attributes: object = {};

  protected check: Boolean = true;

  protected sign: Boolean = false;


  constructor(app: BaseApplicatioin)
  {
    this.app = app;
  }

  async handle(closure: Function): Promise<Response>
  {
    return null;
  }

  /**
   * 设置处理失败时的错误消息
   * @param message 错误消息
   */
  setFail(message: string): void
  {
    this.fail = message;
  }

  respondWith(attributes: object, sign: Boolean = false): this
  {
    this.attributes = attributes;
    this.sign = sign;

    return this;
  }

  async toResponse(): Promise<Response>
  {
    let base = {
      return_code: this.fail === null ? this.SUCCESS : this.FAIL,
      return_msg: this.fail
    };

    let attributes = merge(base, this.attributes);

    if (this.sign) {
      attributes['sign'] = makeSignature(attributes, await this.app.getKey())
    }

    return new Response(Buffer.from(buildXml(attributes)));
  }

  async getMessage(): Promise<object>
  {
    let res = await this.app.request.getContent()
    let message: object= await this.parseMessage(res ? res.toString() : '');
    this.app.log('Payment.Notify.Handler.getMessage', message);

    if (!message) {
      throw new Error('Invalid request message.');
    }

    if (this.check) {
      await this.validate(message);
    }

    return message;
  }
  
  protected async parseMessage(content: string): Promise<any>
  {
    try {
      if (!content) {
        return {};
      }
      else if (0 === content.indexOf('<')) {
        content = await parseXml(content);
      } else {
        // Handle JSON format.
        try {
          content = JSON.parse(content);
        }
        catch (e) {}
      }

      return content;
    } catch (e) {
      throw new Error(`Invalid message content: ${content}`);
    }
  }

  async decryptMessage(key: string): Promise<string>
  {
    let message: object = await this.getMessage();
    if (!message[key]) {
      return null;
    }

    return AES.decrypt(Buffer.from(message[key], 'base64'), createHash(this.app.config.key, 'md5'), '', true, 'aes-256-ecb').toString();
  }

  protected async validate(message: object): Promise<void>
  {
    let sign = message['sign'];

    if (makeSignature(message, await this.app.getKey()) !== sign) {
      throw new Error('Invalid Sign');
    }
  }

  protected strict(result: any): void
  {
    if (true !== result && this.fail === null) {
      this.fail = result === false ? '' : result;
    }
  }

}
