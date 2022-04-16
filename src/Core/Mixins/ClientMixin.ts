'use strict';

import AccessTokenAwareClient from "../HttpClient/AccessTokenAwareClient";

class ClientMixin
{
  protected client: AccessTokenAwareClient;

  /**
   * 获取客户端实例
   * @returns
   */
  getClient(): AccessTokenAwareClient {
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
