'use strict';

import TextBody from 'body';
import AnyBody from 'body/any';
import * as Url from 'url';
import { IncomingMessage as HttpRequest } from 'http';
import BaseRequest from './BaseRequest';
import { isIp } from '../Utils';

export default class Request implements BaseRequest
{
  protected _uri: string = '';
  protected _method: string = '';
  protected _headers: object = {};
  protected _get: object = {};
  protected _post: object = {};
  protected _content: string = '';
  protected _contentType: string = '';
  protected _ip: string = '';

  constructor(req: HttpRequest)
  {
    this._uri = req.url;
    this._method = req.method;
    this._headers = req.headers || {};
    this._contentType = req.headers['content-type'] || '';

    this._get = Url.parse(req.url, true).query;

    TextBody(req, (err, body) => {
      if (err) {
        throw new Error(err);
      }
      this._content = body;
    });

    AnyBody(req, (err, body) => {
      if (err) {
        throw new Error(err);
      }
      this._post = body;
    });


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

  getMethod(): string
  {
    return this._method;
  }

  get(key: string): any
  {
    return this._get[key] || this._post[key] || null;
  }

  getContent(): string
  {
    return this._content || '';
  }

  getUri(): string
  {
    return this._uri || '';
  }

  getContentType(): string
  {
    return this._contentType || '';
  }

  getHeaders(): object
  {
    return this._headers || {};
  }

  async getClientIp()
  {
    return this._ip;
  }

};
