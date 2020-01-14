'use strict';

import BaseClient from '../Core/BaseClient';

export default class Client extends BaseClient
{

  getPublicKey(): Promise<any>
  {
    let params = {
      sign_type: 'MD5',
      baseUrl: '',
    };

    return this.safeRequestApi('https://fraud.mch.weixin.qq.com/risk/getpublickey', params);
  }

}
