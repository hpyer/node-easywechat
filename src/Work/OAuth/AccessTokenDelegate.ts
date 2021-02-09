'use strict';

import { AccessToken } from '../../Core/BaseAccessToken';
import Work from '../Application';

export default class AccessTokenDelegate extends AccessToken
{
  app: Work = null;

  constructor(app: Work)
  {
    super();
    this.app = app;
  }

  /**
   * 获取授权后的token
   */
  async getToken(): Promise<string>
  {
    return (await this.app.access_token.getToken())['access_token'];
  }

}
