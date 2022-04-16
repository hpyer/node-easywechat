'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class Client extends BaseClient
{

  /**
   * 绑定公众号或小程序
   */
  create(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/open/create', {
      appid: this.app.config.app_id,
    });
  }

  /**
   * 将公众号或小程序绑定到指定开放平台帐号下
   * @param openAppId 开放平台app_id
   */
  bindTo(openAppId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/open/bind', {
      appid: this.app.config.app_id,
      open_appid: openAppId,
    });
  }

  /**
   * 将公众号/小程序从开放平台帐号下解绑
   * @param openAppId 开放平台app_id
   */
  unbindFrom(openAppId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/open/unbind', {
      appid: this.app.config.app_id,
      open_appid: openAppId,
    });
  }

  /**
   * 获取公众号/小程序所绑定的开放平台帐号
   */
  getBinding(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/open/get', {
      appid: this.app.config.app_id,
    });
  }

}
