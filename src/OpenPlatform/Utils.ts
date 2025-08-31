'use strict';

import Application from './Application';

class Utils
{
  protected app: Application = null;

  constructor(app: Application)
  {
    this.app = app;
  }

  /**
   * 登录凭证校验
   * @see https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html
   * @param code
   * @returns
   */
  async codeToSession(code: string): Promise<Record<string, any>>
  {
    let client = this.app.getHttpClient();
    let response = await (await client.request('GET', '/sns/oauth2/access_token', {
      params: {
        appid: this.app.getAccount().getAppId(),
        secret: this.app.getAccount().getSecret(),
        code,
        grant_type: 'authorization_code',
      }
    })).toObject();
    if (!response['openid']) {
      throw new Error(`code2Session error: ${JSON.stringify(response)}`);
    }
    return response;
  }
};

export = Utils;
