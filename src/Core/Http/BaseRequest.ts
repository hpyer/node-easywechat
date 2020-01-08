'use strict';

export default class BaseRequest
{
  getMethod(): string
  {
    return '';
  }

  get(key: string): any
  {
    return null;
  }

  getContent(): string
  {
    return '';
  }

  getUri(): string
  {
    return '';
  }

  getContentType(): string
  {
    return '';
  }

};
