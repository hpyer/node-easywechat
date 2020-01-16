'use strict';

import { IncomingMessage } from "http";

export default class Response
{
  protected content: any = '';
  protected statusCode: number = 200;
  protected headers: object = {};

  constructor(content: any, statusCode: number = 200, headers: object = {})
  {
    this.content = content;
    this.statusCode = statusCode;
    this.headers = headers;
  }

  setContent(content: any): void
  {
    this.content = content;
  }

  getContent(): any
  {
    return this.content;
  }

  setStatusCode(statusCode: number): void
  {
    this.statusCode = statusCode;
  }

  getStatusCode(): number
  {
    return this.statusCode;
  }

  addHeader(key: string, val: string): void
  {
    this.headers[key] = val;
  }

  setHeaders(headers: object): void
  {
    this.headers = headers;
  }

  getHeaders(): object
  {
    return this.headers;
  }

  getHeader(key: string): string
  {
    return this.headers[key] || '';
  }

  static buildFromIncomingMessage(message: IncomingMessage)
  {
    return new Response(message['body'], message['statusCode'], message['headers']);
  }

};
