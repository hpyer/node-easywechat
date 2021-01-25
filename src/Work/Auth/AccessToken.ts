'use strict';

import BaseAccessToken from '../../Core/BaseAccessToken';

export default class AccessToken extends BaseAccessToken
{
  protected endpointToGetToken: string = 'https://api.weixin.qq.com/cgi-bin/token';

  protected async getCredentials(): Promise<object>
  {
    return {
      grant_type: 'client_credential',
      appid: this.app.config.app_id,
      secret: this.app.config.secret,
    };
  }

}
