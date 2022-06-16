'use strict';

import AccessTokenAwareClient from "../HttpClient/AccessTokenAwareClient";

abstract class ClientMixin
{
  protected client: AccessTokenAwareClient;

  /**
   * 创建客户端实例
   * @returns
   */
  abstract createClient(): AccessTokenAwareClient

  /**
   * 获取客户端实例
   * @returns
   */
  getClient(): AccessTokenAwareClient {
    if (!this.client) {
      this.client = this.createClient();
    }
    return this.client;
  }

  /**
   * 设置客户端实例
   * @param client
   * @returns
   */
  setClient(client: AccessTokenAwareClient): this {
    this.client = client;

    return this;
  }
};

export = ClientMixin;
