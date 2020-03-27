'use strict';

import JssdkClient from '../../BaseService/Jssdk/Client';
import { randomString, getTimestamp, makeSignature } from '../../Core/Utils';
import BaseAccessToken from '../../Core/BaseAccessToken';

export default class Client extends JssdkClient
{

  bridgeConfig(prepayId: string, json: Boolean = true): any
  {
    let params = {
      appId: this.app['config'].sub_appid ? this.app['config'].sub_appid : this.app['config'].app_id,
      timeStamp: getTimestamp() + '',
      nonceStr: randomString(16),
      package: `prepay_id=${prepayId}`,
      signType: 'MD5',
    };

    params['paySign'] = makeSignature(params, this.app['config'].key, 'md5');

    return json ? JSON.stringify(params) : params;
  }

  sdkConfig(prepayId: string): object
  {
    let config = this.bridgeConfig(prepayId, false);
    config['timestamp'] = config['timeStamp'];
    delete config['timeStamp'];

    return config;
  }

  appConfig(prepayId: string): object
  {
    let params = {
      appid: this.app['config'].app_id,
      partnerid: this.app['config'].mch_id,
      prepayid: prepayId,
      noncestr: randomString(16),
      timestamp: getTimestamp() + '',
      package: 'Sign=WXPay',
    };

    params['sign'] = makeSignature(params, this.app['config'].key, 'md5');

    return params;
  }

  async shareAddressConfig(accessToken: any, json: Boolean = true): Promise<any>
  {
    if (accessToken instanceof BaseAccessToken) {
      accessToken = await accessToken.getToken();
    }

    let params = {
      appId: this.app['config'].app_id,
      scope: 'jsapi_address',
      timeStamp: getTimestamp() + '',
      nonceStr: randomString(16),
      signType: 'SHA1',
    };

    let signParams = {
      appId: params['appId'],
      url: this.getUrl(),
      timestamp: params['timeStamp'],
      noncestr: params['nonceStr'],
      accesstoken: '' + accessToken,
    };

    params['addrSign'] = makeSignature(signParams, '', 'sha1');

    return json ? JSON.stringify(params) : params;
  }

}
