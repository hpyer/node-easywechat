'use strict';

import { AccessToken } from '../../../../Core/BaseAccessToken';
import BaseClient from '../../../../OfficialAccount/OAuth/OAuthClient';

export default class Client extends BaseClient
{
  /**
   * 获取配置中的app_id
   */
  getAppId(): string
  {
    return this.app.config.app_id;
  }

  /**
   * 获取授权后的token
   */
  getToken(): Promise<AccessToken>
  {
    return this.app.access_token.getToken();
  }

}
