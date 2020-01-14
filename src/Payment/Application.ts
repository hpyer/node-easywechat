'use strict';

import BaseApplication from '../Core/BaseApplication';
import { getTimestamp, randomString, makeSignature, buildQueryString } from '../Core/Utils';

export default class Application extends BaseApplication
{
  protected defaultConfig: object = {
    // 必要配置
    app_id : '',
    mch_id : '',
    key : '',   // API 密钥
    http: {
      baseUrl: 'https://api.mch.weixin.qq.com/',
    },
  };

  constructor(config = {})
  {
    super(config);

    let providers = [
      'OfficialAccount/Auth',
      'BaseService/Url',

      'Payment/Base',
      'Payment/Bill',
      'Payment/Coupon',
      'Payment/Jssdk',
      'Payment/Merchant',
      'Payment/Order',
      'Payment/Redpack',
      'Payment/Refund',
      'Payment/Reverse',
      'Payment/Sandbox',
      'Payment/Transfer',
      'Payment/Security',
      'Payment/ProfitSharing',
    ];
    super.registerProviders(providers);
  }

  scheme(product_id: string): string
  {
    let params = {
      appid: this['config']['app_id'],
      mch_id: this['config']['mch_id'],
      time_stamp: getTimestamp(),
      nonce_str: randomString(16),
      product_id,
    }

    params['sign'] = makeSignature(params, this['config']['key']);

    return 'weixin://wxpay/bizpayurl?' + buildQueryString(params);
  }

  codeUrlScheme(codeUrl: string): string
  {
    return 'weixin://wxpay/bizpayurl?sr=' + codeUrl;
  }

  setSubMerchant(mchId: string, appId: string = null): object
  {
    this['config']['sub_mch_id'] = mchId;
    this['config']['sub_appid'] = appId;

    return this;
  }

  inSandbox(): boolean
  {
    return !!this['config']['sandbox'];
  }

  getKey(endpoint: string = null)
  {
    if ('sandboxnew/pay/getsignkey' === endpoint) {
      return this['config']['key'];
    }

    let key = this.inSandbox() ? this['sandbox'].getKey() : this['config']['key'];

    if (!key) {
      throw new Error('config key should not empty.');
    }

    if (32 !== key.length) {
      throw new Error(`'${key}' should be 32 chars length.`);
    }

    return key;
  }


  async pay(params: object): Promise<any>
  {
    return await this['app']['base'].pay(params);
  }

  async authCodeToOpenid(auth_code: string): Promise<any>
  {
    return await this['app']['base'].authCodeToOpenid(auth_code);
  }

};
