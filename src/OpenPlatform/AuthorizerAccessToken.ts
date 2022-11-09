'use strict';

import AccessTokenInterface from "../Core/Contracts/AccessTokenInterface";

class AuthorizerAccessToken implements AccessTokenInterface
{
  constructor(
    protected appId: string,
    protected accessToken: string
  ) { }

  /**
   * 获取appId
   * @returns
   */
  getAppId(): string {
    return this.appId;
  }

  async getToken(): Promise<string> {
    return this.accessToken;
  }

  async toQuery(): Promise<Record<string, any>> {
    return {
      'access_token': await this.getToken(),
    };
  }

  /**
   * 转为字符串
   * @returns
   */
  toString() {
    return this.accessToken;
  }

}

export = AuthorizerAccessToken;
