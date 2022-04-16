'use strict';

import BaseClient from '../../Core/BaseClient';
import { createHmac } from '../../Core/Utils';

export default class OpenDataClient extends BaseClient {

  protected baseUrl = 'https://api.weixin.qq.com/wxa/';

  removeUserStorage(openid: string, sessionKey: string, key: Array<string>): Promise<any> {
    let data = {
      key: key,
    };
    let query = {
      openid: openid,
      sig_method: 'hmac_sha256',
      signature: createHmac(JSON.stringify(data), sessionKey, 'sha256'),
    };

    return this.httpPostJson('remove_user_storage', data, query);
  }

  setUserStorage(openid: string, sessionKey: string, kvList: object): Promise<any> {
    let data = {
      kv_list: this.formatKVLists(kvList),
    };
    let query = {
      openid: openid,
      sig_method: 'hmac_sha256',
      signature: createHmac(JSON.stringify(data), sessionKey, 'sha256'),
    };

    return this.httpPostJson('set_user_storage', data, query);
  }

  protected formatKVLists(params: object): Array<object> {
    let formatted = [];

    for (let key in params) {
      formatted.push({
        name: key,
        value: params[key],
      });
    }

    return formatted;
  }

}
