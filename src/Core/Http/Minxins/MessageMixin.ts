'use strict';

import merge from "merge";

class MessageMixin
{
  protected headers: Record<string, any> = {};
  protected protocal: string = '1.1';
  protected content: Buffer

  getProtocolVersion(): string {
    return this.protocal;
  }
  withProtocolVersion(protocal: string): this {
    this.protocal = protocal;
    return this;
  }
  getHeaders(): Record<string, any> {
    return this.headers;
  }
  hasHeader(name: string): boolean {
    return this.headers[name.toLowerCase()] !== undefined;
  }
  getHeader(name: string) {
    return this.headers[name.toLowerCase()];
  }
  getHeaderLine(name: string) {
    let values = this.getHeader(name);
    if (values && Object.prototype.toString.call(values) == '[object Array]') {
      return values.join(',');
    }
    return values;
  }
  withHeader(name: string, value: string | string[]): this {
    this.headers[name.toLowerCase()] = value;
    return this;
  }
  withAddedHeader(name: string, value: string | string[]): this {
    let oldValue = this.getHeader(name);
    if (oldValue === undefined || oldValue === null) {
      return this.withHeader(name, value);
    }
    name = name.toLowerCase();
    if (Object.prototype.toString.call(oldValue) != '[object Array]') {
      this.headers[name] = [oldValue];
    }
    if (Object.prototype.toString.call(value) == '[object Array]') {
      this.headers[name] = oldValue.concat(value);
    }
    else {
      this.headers[name].push(value);
    }
    return this;
  }
  withoutHeader(name: string): this {
    name = name.toLowerCase();
    this.headers[name] = undefined;
    delete this.headers[name];
    return this;
  }
  getBody(): Buffer {
    return this.content;
  }
  withBody(body: any): this {
    if (Buffer.isBuffer(body)) {
      this.content = body;
    }
    else if (typeof body === 'string') {
      this.content = Buffer.from(body);
    }
    else {
      this.content = Buffer.from(JSON.stringify(body));
    }
    return this;
  }

  /**
   * 设置headers
   * @param headers
   * @returns
   */
  protected setHeaders(headers: Record<string, any>): this {
    this.headers = merge.recursive(true, headers);
    for (let key in this.headers) {
      if (key !== key.toLowerCase()) {
        this.headers[key.toLowerCase()] = this.headers[key];
      }
    }
    return this;
  }
};

export = MessageMixin;
