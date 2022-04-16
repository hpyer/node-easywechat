'use strict';

import BaseAccessToken from '../../Core/BaseAccessToken';

export default class AccessToken extends BaseAccessToken
{
  protected endpointToGetToken: string = 'cgi-bin/gettoken';

  protected async getCredentials(): Promise<object>
  {
    if (!this.app.config.corp_id) {
      throw new Error('Please set `corp_id` in config');
    }
    if (!this.app.config.secret) {
      throw new Error('Please set `secret` in config');
    }
    return {
      corpid: this.app.config.corp_id,
      corpsecret: this.app.config.secret,
    };
  }

}
