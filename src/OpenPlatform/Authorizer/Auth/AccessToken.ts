'use strict';

import BaseAccessToken from '../../../Core/BaseAccessToken';
import OpenPlatformApplication from '../../Application';
import BaseApplicatioin from '../../../Core/BaseApplication';
import { buildQueryString } from '../../../Core/Utils';

export default class AccessToken extends BaseAccessToken
{
  protected requestMethod: string = 'POST';
  protected queryName: string = 'access_token';
  protected tokenKey: string = 'authorizer_access_token';
  protected component: OpenPlatformApplication = null;

  constructor(app: BaseApplicatioin, component: OpenPlatformApplication)
  {
    super(app);

    this.component = component;
  }

  protected async getCredentials(): Promise<object>
  {
    return {
      component_appid: this.component.config.app_id,
      authorizer_appid: this.app.config.app_id,
      authorizer_refresh_token: this.app.config.refresh_token,
    };
  }

  async getEndpoint(): Promise<string>
  {
    return 'cgi-bin/component/api_authorizer_token?' + buildQueryString({
      component_access_token: (await this.component.access_token.getToken())['component_access_token'],
    });
  }
}
