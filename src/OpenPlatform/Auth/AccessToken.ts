'use strict';

import BaseAccessToken from '../../Core/BaseAccessToken';

export default class AccessToken extends BaseAccessToken
{
  protected requestMethod: string = 'POST';
  protected tokenKey: string = 'component_access_token';
  protected endpointToGetToken: string = 'cgi-bin/component/api_component_token';

  protected async getCredentials(): Promise<object>
  {
    return {
      component_appid: this.app.config.app_id,
      component_appsecret: this.app.config.secret,
      component_verify_ticket: await this.app['verify_ticket'].getTicket(),
    };
  }
}
