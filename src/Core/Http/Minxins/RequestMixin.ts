'use strict';

class RequestMixin
{
  protected requestTarget: string = '';
  protected method: string = '';
  protected uri: string

  getRequestTarget(): string {
    return this.requestTarget;
  }
  withRequestTarget(requestTarget: string): this {
    this.requestTarget = requestTarget;
    return this;
  }
  getMethod(): string {
    return this.method;
  }
  withMethod(method: string): this {
    this.method = method.toUpperCase();
    return this;
  }
  getUri(): string {
    return this.uri;
  }
  withUri(uri: string): this {
    this.uri = uri;
    return this;
  }

};

export = RequestMixin;
