'use strict';

import BaseClient, {AccessToken} from '../../../../OfficialAccount/OAuth/OAuthClient';

export default class Client extends BaseClient
{
  /**
   * 获取配置中的app_id
   */
  getAppId(): string
  {
    return this.app['config']['app_id'];
  }

  /**
   * 获取授权后的token
   */
  async getToken(): Promise<AccessToken>
  {
    return this.app['access_token'].getToken();
  }

}
