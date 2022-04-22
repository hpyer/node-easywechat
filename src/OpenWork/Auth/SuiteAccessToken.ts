'use strict';

import BaseAccessToken, { AccessToken } from '../../Core/BaseAccessToken';

export default class SuiteAccessToken extends BaseAccessToken
{
  protected requestMethod: string = 'POST';
  protected tokenKey: string = 'suite_access_token';
  protected endpointToGetToken: string = 'cgi-bin/service/get_suite_token';
  protected cachePrefix: string = 'easywechat.kernel.suite_access_token.';

  protected warpAccessToken(token: Record<string, any>): AccessToken {
    return new AccessToken(token, {
      access_token: 'suite_access_token',
    });
  }

  protected async getCredentials(): Promise<object>
  {
    return {
      suite_id: this.app.config.suite_id,
      suite_secret: this.app.config.suite_secret,
      suite_ticket: await this.app['suite_ticket'].getTicket(),
    };
  }
}
