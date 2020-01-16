'use strict';

import BaseClient from '../Core/BaseClient';

export default class Client extends BaseClient
{

  async pay(params: object): Promise<any>
  {
    params['appid'] = this.app['config']['app_id'];
    return await this.request(this.wrap('pay/micropay'), params);
  }

  async authCodeToOpenid(auth_code: string): Promise<any>
  {
    return await this.request('tools/authcodetoopenid', {
      appid: this.app['config']['app_id'],
      auth_code,
    });
  }

}
