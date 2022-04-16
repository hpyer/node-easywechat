'use strict';

export default abstract class RequestInterface
{
  getMethod(): string
  {
    return '';
  }

  get(key: string): Promise<any>
  {
    return null;
  }

  post(key: string): Promise<any>
  {
    return null;
  }

  getContent(): Promise<any>
  {
    return null;
  }

  getUri(): string
  {
    return '';
  }

  getContentType(): string
  {
    return '';
  }

  getHeaders(): object
  {
    return null;
  }

  getClientIp(): string
  {
    return '';
  }

};
