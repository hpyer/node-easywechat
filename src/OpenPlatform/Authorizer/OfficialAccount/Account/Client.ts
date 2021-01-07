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

  /**
   * 从第三方平台跳转至微信公众平台授权注册页面
   * @param callbackUrl
   * @param copyWxVerify
   */
  getFastRegistrationUrl(callbackUrl: string, copyWxVerify: Boolean = true): string
  {
    let query = {
      copy_wx_verify: copyWxVerify,
      component_appid: this.component.config.app_id,
      appid: this.app.config.app_id,
      redirect_uri: callbackUrl,
    }
    return 'https://mp.weixin.qq.com/cgi-bin/fastregisterauth?' + buildQueryString(query);
  }

  /**
   * 第三方平台调用快速注册 API 完成注册
   * @param ticket 公众号扫码授权的凭证(公众平台扫码页面回跳到第三方平台时携带)
   */
  register(ticket: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/account/fastregister', {
      ticket: ticket,
    });
  }


}
