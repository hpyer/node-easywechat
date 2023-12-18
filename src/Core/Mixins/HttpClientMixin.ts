'use strict';

import HttpClientInterface from '../HttpClient/Contracts/HttpClientInterface';
import HttpClient from '../HttpClient/HttpClient';

class HttpClientMixin
{

  protected httpClient: HttpClientInterface = null;

  /**
   * 获取请求客户端实例
   * @returns
   */
  getHttpClient(): HttpClientInterface
  {
    if (!this.httpClient) {
      if (typeof this['createHttpClient'] === 'function') {
        this.httpClient = this['createHttpClient']();
      }
      else {
        this.httpClient = this.createDefaultHttpClient();
      }
    }
    return this.httpClient;
  }

  /**
   * 设置请求客户端实例
   * @param httpClient
   * @returns
   */
  setHttpClient(httpClient: HttpClientInterface): this
  {
    this.httpClient = httpClient;
    return this;
  }

  /**
   * 创建默认请求客户端实例
   * @returns
   */
  protected createDefaultHttpClient(): HttpClientInterface
  {
    return HttpClient.create(this.getHttpClientDefaultOptions());
  }

  /**
   * 获取请求默认配置
   * @returns
   */
  protected getHttpClientDefaultOptions(): Record<string, any>
  {
    return {};
  }

};

export = HttpClientMixin;
