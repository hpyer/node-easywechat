'use strict';

export default class Response
{
  protected content: Buffer = null;
  protected statusCode: number = 200;
  protected headers: object = {};

  constructor(content: Buffer, statusCode: number = 200, headers: object = {})
  {
    this.content = content;
    this.statusCode = statusCode;
    this.headers = headers;
  }

  setContent(content: Buffer): void
  {
    this.content = content;
  }

  getContent(): Buffer
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

};
