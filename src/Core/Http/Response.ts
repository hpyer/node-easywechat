'use strict';

export default class Response
{
  protected content: Buffer = null;
  protected statusCode: number = 200;
  protected headers: object = {};
  protected config: object = {};

  constructor(content: Buffer, statusCode: number = 200, headers: object = {}, config: object = {})
  {
    this.content = content;
    this.statusCode = statusCode;
    this.headers = headers;
    this.config = config;
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

  setConfig(config: object): void {
    this.config = config;
  }

  getConfig(): object {
    return this.config;
  }

};
