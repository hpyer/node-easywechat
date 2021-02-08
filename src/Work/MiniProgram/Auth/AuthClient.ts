'use strict';

import BaseClient from '../../../Core/BaseClient';

export default class AuthClient extends BaseClient
{

  /**
   * 小程序登录，jscode换取session_key
   * @param code wx.login 获取的 code
   */
  async session(code: string): Promise<any>
  {
    return this.httpGet('cgi-bin/miniprogram/jscode2session', {
      js_code: code,
      grant_type: 'authorization_code',
    });
  }

}
