'use strict';

import TextBody from 'body';
import AnyBody from 'body/any';
import * as Url from 'url';
import { IncomingMessage as HttpRequest } from 'http';
import BaseRequest from './BaseRequest';

export default class Request implements BaseRequest
{
  protected _uri: string = '';
  protected _method: string = '';
  protected _get: object = {};
  protected _post: object = {};
  protected _content: string = '';
  protected _contentType: string = '';

  constructor(req: HttpRequest)
  {
    this._uri = req.url;
    this._method = req.method;
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

};
