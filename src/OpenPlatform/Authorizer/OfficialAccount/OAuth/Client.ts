'use strict';

import BaseClient from '../../../../OfficialAccount/OAuth/OAuth';

export default class Client extends BaseClient
{
  getAppId(): string
  {
    return this.app['config']['app_id'];
  }

  async getToken(): Promise<object>
  {
    return this.app['access_token'].getToken();
  }

}
