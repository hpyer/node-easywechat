'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class Client extends BaseClient
{
  protected component = null;

  constructor(app, component)
  {
    super(app);

    this.component = component;
  }

  async session(code: string): Promise<any>
  {
    let access_token = await this.component['access_token'].getToken()['component_access_token'];
    return this.httpGet('sns/component/jscode2session', {
      appid: this.app['config']['app_id'],
      js_code: code,
      grant_type: 'authorization_code',
      component_appid: this.component['config']['app_id'],
      component_access_token: access_token,
    });
  }

}
