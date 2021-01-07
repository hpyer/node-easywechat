'use strict';

import BaseClient from '../../Core/BaseClient';

export default class AuthClient extends BaseClient
{

  /**
   * 根据 jsCode 获取用户 session 信息
   * @param code 小程序端通过 wx.login 获取
   */
  session(code: string): Promise<any>
  {
    let params = {
      appid: this.app.config.app_id,
      secret: this.app.config.secret,
      js_code: code,
      grant_type: 'authorization_code',
    };

    return this.httpGet('sns/jscode2session', params);
  }

}
