'use strict';

import BaseAccessToken from "../OfficialAccount/AccessToken";

class AccessToken extends BaseAccessToken
{

  /**
   * 获取access_token的缓存名称
   * @returns
   */
  getKey(): string {
    if (!this.key) {
      this.key = `mini_app.access_token.${this.appId}`;
    }
    return this.key;
  }

}

export = AccessToken;
