'use strict';

import BaseClient from '../Core/BaseClient';

export default class SecurityClient extends BaseClient
{

  /**
   * 获取 RSA 公钥
   */
  getPublicKey(): Promise<any>
  {
    let params = {
      sign_type: 'MD5',
      baseUrl: '',
    };

    return this.safeRequest('https://fraud.mch.weixin.qq.com/risk/getpublickey', params);
  }

}
