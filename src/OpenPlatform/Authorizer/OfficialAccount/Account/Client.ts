'use strict';

import BaseClient from '../../Aggregate/Account/Client';
import BaseApplicatioin from '../../../../Core/BaseApplication';
import OpenPlatformApplication from '../../../Application';
import { buildQueryString } from '../../../../Core/Utils';

export default class Client extends BaseClient
{

  protected component: OpenPlatformApplication = null;

  constructor(app: BaseApplicatioin, component: OpenPlatformApplication)
  {
    super(app);

    this.component = component;
  }

  getFastRegistrationUrl(callbackUrl: string, copyWxVerify: Boolean = true): string
  {
    let query = {
      copy_wx_verify: copyWxVerify,
      component_appid: this.component['config']['app_id'],
      appid: this.app['config']['app_id'],
      redirect_uri: callbackUrl,
    }
    return 'https://mp.weixin.qq.com/cgi-bin/fastregisterauth?' + buildQueryString(query);
  }

  register(ticket: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/account/fastregister', {
      ticket: ticket,
    });
  }


}
