'use strict';

import Application from './Application';
import Decryptor from './Decryptor';

class Utils
{
  protected app: Application = null;

  constructor(app: Application)
  {
    this.app = app;
  }

  /**
   * 登录凭证校验
   * @see https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html
   * @param code
   * @returns
   */
  async codeToSession(code: string): Promise<Record<string, any>>
  {
    let client = this.app.getHttpClient();
    let response = await (await client.request('GET', '/sns/jscode2session', {
      params: {
        appid: this.app.getAccount().getAppId(),
        secret: this.app.getAccount().getSecret(),
        js_code: code,
        grant_type: 'authorization_code',
      }
    })).toObject();
    if (!response['openid']) {
      throw new Error(`code2Session error: ${JSON.stringify(response)}`);
    }
    return response;
  }

  /**
   * 数据解密
   * @see https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#加密数据解密算法
   * @param sessionKey
   * @param iv
   * @param ciphertext
   * @returns
   */
  public decryptSession(sessionKey: string, iv: string, ciphertext: string): object
  {
    return Decryptor.decrypt(sessionKey, iv, ciphertext);
  }

};

export = Utils;
