'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  session(code: string): Promise<any>
  {
    let params = {
      appid: this.app['config']['app_id'],
      secret: this.app['config']['secret'],
      js_code: code,
      grant_type: 'authorization_code',
    };

    return this.httpGet('sns/jscode2session', params);
  }

}
