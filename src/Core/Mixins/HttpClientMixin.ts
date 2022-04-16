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
      this.httpClient = this.createHttpClient();
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
   * 创建请求客户端实例
   * @returns
   */
  protected createHttpClient(): HttpClientInterface
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
