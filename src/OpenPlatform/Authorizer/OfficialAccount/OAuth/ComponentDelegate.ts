'use strict';

import { OAuthComponent } from '../../../../OfficialAccount/OAuth/OAuthClient';
import OpenPlatform from '../../../Application';

export default class ComponentDelegate extends OAuthComponent
{
  app: OpenPlatform = null;

  constructor(app: OpenPlatform)
  {
    super();
    this.app = app;
  }

  /**
   * 获取配置中的app_id
   */
  getAppId(): string
  {
    return this.app.config.app_id;
  }

  /**
   * 获取授权后的token
   */
  async getToken(): Promise<string>
  {
    return (await this.app.access_token.getToken())['component_access_token'];
  }

}
