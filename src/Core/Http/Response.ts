'use strict';

export default class Response
{
  protected content: string = '';
  protected statusCode: number = 200;
  protected headers: object = {};

  constructor(content: string = '', statusCode: number = 200, headers: object = {})
  {
    this.content = content;
    this.statusCode = statusCode;
    this.headers = headers;
  }

  setContent(content: string): void
  {
    this.content = content;
  }

  getContent(): string
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

};
