'use strict';

import BaseAccessToken from '../../Core/BaseAccessToken';

export default class AccessToken extends BaseAccessToken
{
  protected endpoint: string = 'https://api.weixin.qq.com/cgi-bin/token';

  getCredentials(): object
  {
    return {
      appid: this.app['config']['app_id'],
      secret: this.app['config']['secret'],
      grant_type: 'client_credential'
    };
  }

}
