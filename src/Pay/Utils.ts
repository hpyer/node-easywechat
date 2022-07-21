'use strict';

import RSA from '../Core/Support/RSA';
import { createHash, createHmac, getTimestamp, randomString } from '../Core/Support/Utils';
import { PayAppConfig, PayBridgeConfig, PaySdkConfig } from '../Types/global';
import MerchantInterface from './Contracts/MerchantInterface';

class Utils
{
  constructor(
    protected merchant: MerchantInterface,
  ) { }

  /**
   * 创建签名（V3），并返回签名字符串
   * @param params 参数集合
   * @returns
   */
  protected createSignature(message: string): string
  {
    let rsa = new RSA;
    rsa.setPublicKey(this.merchant.getCertificate().toString());
    rsa.setPrivateKey(this.merchant.getPrivateKey().toString());

    return rsa.sign(message);
  }

  /**
   * 创建签名（V2），并返回签名字符串
   * @param params 参数集合
   * @returns
   */
  public createV2Signature(params: Record<string, string | number>): string
  {
    let signString = '';
    let sparator = '';
    let keys = Object.keys(params);
    keys = keys.sort();
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] == 'sign' || keys[i] == 'paySign' || typeof params[keys[i]] === undefined || params[keys[i]] === null) continue;
      signString += sparator + keys[i] + '=' + params[keys[i]];
      sparator = '&';
    }

    let key = this.merchant.getV2SecretKey();
    if (!key) {
      throw new Error('Missing V2 API key.');
    }
    signString += '&key=' + key;

    let sign = '';
    let type = params['signType'] ? (params['signType'] + '').toLowerCase() : 'md5';
    switch (type) {
      case 'sha1':
      case 'md5':
        sign = createHash(signString, type);
        break;
      case 'hmac-sha256':
      case 'hmac_sha256':
        type = type.replace(/^hmac[\-|_]/i, '');
        sign = createHmac(signString, key, type);
        break;
    }

    if (!sign) {
      throw new Error('Failed to sign the request.');
    }

    return (sign + '').toUpperCase();
  }

  /**
   * 构建JSBridge支付参数
   * @see [v3文档](https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_1_4.shtml)
   * @see [v2文档](https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6)
   * @param prepayId 下单接口返回的prepay_id
   * @param appId 应用id
   * @param signType v3仅支持RSA，V2支持MD5、HMAC-SHA256
   * @returns
   */
  buildBridgeConfig(prepayId: string, appId: string, signType: string = 'RSA'): PayBridgeConfig {
    let params = {
      appId,
      timeStamp: getTimestamp(),
      nonceStr: randomString(),
      package: 'prepay_id=' + prepayId,
      signType,
      paySign: '',
    };

    // v2
    if (signType != 'RSA') {
      params.paySign = this.createV2Signature(params);
    }
    // v3
    else {
      let message = `${params.appId}\n${params.timeStamp}\n${params.nonceStr}\n${params.package}\n`;
      params.paySign = this.createSignature(message);
    }

    return params;
  }

  /**
   * 构建JS-SDK支付参数
   * @see https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#58
   * @param prepayId 下单接口返回的prepay_id
   * @param appId 应用id
   * @param signType v3仅支持RSA，V2支持MD5、HMAC-SHA256
   */
  buildSdkConfig(prepayId: string, appId: string, signType: string = 'RSA'): PaySdkConfig {
    let config = this.buildBridgeConfig(prepayId, appId, signType);

    return {
      appId: config.appId,
      timestamp: config.timeStamp,
      nonceStr: config.nonceStr,
      package: config.package,
      signType: config.signType,
      paySign: config.paySign,
    }
  }

  /**
   * 构建小程序支付参数
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestPayment.html
   * @param prepayId 下单接口返回的prepay_id
   * @param appId 应用id
   * @param signType v3仅支持RSA，V2支持MD5、HMAC-SHA256
   * @returns
   */
  buildMiniAppConfig(prepayId: string, appId: string, signType: string = 'RSA'): PayBridgeConfig {
    return this.buildBridgeConfig(prepayId, appId, signType);
  }

  /**
   * 构建App支付参数
   * @see https://pay.weixin.qq.com/wiki/doc/apiv3_partner/apis/chapter4_2_4.shtml
   * @param prepayId 下单接口返回的prepay_id
   * @param appId 应用id
   * @returns
   */
  buildAppConfig(prepayId: string, appId: string): PayAppConfig {
    let params = {
      appId,
      partnerid: this.merchant.getMerchantId(),
      prepayid: prepayId,
      nonceStr: randomString(),
      timestamp: getTimestamp(),
      package: 'Sign=WXPay',
      sign: '',
    };

    let message = `${params.appId}\n${params.timestamp}\n${params.nonceStr}\n${params.prepayid}\n`;
    params.sign = this.createSignature(message);

    return params;
  }

};

export = Utils;
