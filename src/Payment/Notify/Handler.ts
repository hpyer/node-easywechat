'use strict';

import BaseApplicatioin from "../../Core/BaseApplication";
import * as Merge from 'merge';
import * as Xml2js from 'xml2js';
import { makeSignature, AesDecrypt, createHash } from "../../Core/Utils";
import Response from "../../Core/Http/Response";

export default class Handler
{

  SUCCESS: string = 'SUCCESS';
  FAIL: string = 'FAIL';

  protected app: BaseApplicatioin = null;

  protected message: object = null;

  protected fail: string = '';

  protected attributes: object = {};

  protected check: Boolean = true;

  protected sign: Boolean = false;


  constructor(app: BaseApplicatioin)
  {
    this.app = app;
  }

  async handle(closure: Function): Promise<void>
  {}

  setFail(message: string): void
  {
    this.fail = message;
  }

  respondWith(attributes: object, sign: Boolean = false): object
  {
    this.attributes = attributes;
    this.sign = sign;

    return this;
  }

  toResponse(): object
  {
    let base = {
      return_code: this.fail ? this.FAIL : this.SUCCESS,
      return_msg: this.fail
    };

    let attributes = Merge(base, this.attributes);

    if (this.sign) {
      attributes['sign'] = makeSignature(attributes, this.app['getKey']())
    }

    let XmlBuilder = new Xml2js.Builder;
    return new Response(XmlBuilder.buildObject(attributes));
  }

  async getMessage(): Promise<object>
  {
    if (this.message) return this.message;

    let message: object = null;
    try {
      message = await Xml2js.parseStringPromise(this.app['request'].getContent());
    }
    catch (e) {
      throw new Error('Invalid request XML: ' + e.message);
    }

    if (!message) {
      throw new Error('Invalid request XML.');
    }

    if (this.check) {
      this.validate(message);
    }

    this.message = message;

    return message;
  }

  async decryptMessage(key: string): Promise<string>
  {
    let message: object = await this.getMessage();
    if (!message[key]) {
      return null;
    }

    let buffer = Buffer.from(message[key], 'base64');

    return AesDecrypt(buffer.toString(), createHash(this.app['config'].key, 'md5'), '', 'AES-256-ECB');
  }

  protected validate(message: object): void
  {
    let sign = message['sign'];

    if (makeSignature(message, this.app['getKey']()) !== sign) {
      throw new Error('Invalid Sign');
    }
  }

  protected strict(result: any): void
  {
    if (true !== result && this.fail === '') {
      this.fail = result;
    }
  }

}
