'use strict';

import Url from 'url';
import { IncomingMessage } from 'http';
import RequestInterface from '../Contracts/RequestInterface';
import { isIp, parseQueryString, isObject, isString, singleItem, parseXml } from '../Utils';
import RawBody from 'raw-body';

export default class Request implements RequestInterface
{
  protected _req: IncomingMessage = null;
  protected _uri: string = '';
  protected _method: string = '';
  protected _headers: object = null;
  protected _get: object = null;
  protected _post: object = null;
  protected _content: Buffer = null;
  protected _contentType: string = '';
  protected _ip: string = '';

  constructor(req: IncomingMessage = null, content: Buffer | object | string = null)
  {
    if (req) {

      this._req = req;

      this._uri = req.url;
      this._method = req.method.toUpperCase();
      this._headers = req.headers || {};
      this._contentType = this._headers['content-type'] || '';

      if (content) {
        if (Buffer.isBuffer(content)) {
          this._content = content;
        }
        else if (isObject(content)) {
          this._post = <object> content;
          this._content = Buffer.from(JSON.stringify(content));
          this._contentType = 'application/json';
        }
        else if (typeof content === 'string') {
          this._content = Buffer.from(content);
        }
      }

      this._get = Url.parse(req.url, true).query || {};

      // 提取请求ip
      if (isIp(this._headers['x-client-ip'])) {
        this._ip = this._headers['x-client-ip'];
      }
      else if (this._headers['x-forwarded-for']) {
        let ip = '';

        let items = this._headers['x-forwarded-for'].split(',');
        for (let i = 0; i < items.length; i++) {
          if (!items[i]) continue;

          ip = items[i].trim();
          if (items[i].indexOf(':') > -1) {
            let tmp = items[i].split(':');
            if (tmp.length == 2) {
              ip = tmp[0];
            }
          }
          if (isIp(ip)) {
            break;
          }
        }
        this._ip = ip;
      }
      else if (isIp(this._headers['x-real-ip'])) {
        this._ip = this._headers['x-real-ip'];
      }
      else if (isIp(this._headers['x-forwarded'])) {
        this._ip = this._headers['x-forwarded'];
      }
      else if (isIp(this._headers['forwarded-for'])) {
        this._ip = this._headers['forwarded-for'];
      }
      else if (isIp(this._headers['client-ip'])) {
        this._ip = this._headers['client-ip'];
      }
    }

  }

  isValid(): Boolean
  {
    return !!this._req;
  }

  getMethod(): string
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    return this._method;
  }

  get(key: string): Promise<any>
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    if (this._get[key] != undefined) return this._get[key];
    return this.post(key);
  }

  async post(key: string): Promise<any>
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    if (this._method !== 'POST') return null;
    if (!this._post) {
      await this._parseContent();
    }
    return this._post && this._post[key] != undefined ? this._post[key] : null;
  }

  getAllGet(): object
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    return this._get;
  }

  async getAllPost(): Promise<object>
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    if (!this._post) {
      await this._parseContent();
    }
    return this._post;
  }

  private async _parseContent() {
    let content = (await this.getContent()).toString();
    try {
      this._post = JSON.parse(content);
      this._contentType = 'application/json';
    }
    catch (e) {
      if ((content).substring(0, 1) === '<') {
        let res = await parseXml(content);
        this._post = res;
        this._contentType = 'text/xml';
      }
      else {
        this._post = parseQueryString(content);
        this._contentType = 'application/x-www-form-urlencoded';
      }
    }
  }

  async getContent(): Promise<Buffer>
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    if (this._method !== 'POST') return null;
    if (!this._content) {
      this._content = await RawBody(this._req);
    }
    return this._content;
  }

  getUri(): string
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    return this._uri || '';
  }

  getContentType(): string
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    return this._contentType || '';
  }

  getHeaders(): object
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    return this._headers || {};
  }

  getClientIp(): string
  {
    if (!this.isValid) throw new Error('Please set request first. app.rebind(\'request\', new EasyWechat.Request(ctx.req));');
    return this._ip;
  }

};
