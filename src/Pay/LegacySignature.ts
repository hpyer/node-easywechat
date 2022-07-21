'use strict';

import { createHash, createHmac, randomString } from "../Core/Support/Utils";
import MerchantInterface from "./Contracts/MerchantInterface";
import merge from 'merge';

class LegacySignature
{
  constructor(
    protected merchant: MerchantInterface,
  ) {}

  /**
   * V2版本的签名计算，并返回带签名字段的参数集合
   * @param params 参数集合
   * @returns
   */
  sign(params: Record<string, string | number>): Record<string, string | number>
  {
    let nonce = randomString();
    let attributes = merge(true, {
      nonce_str: nonce,
      sub_mch_id: params['sub_mch_id'] ?? null,
      sub_appid: params['sub_appid'] ?? null,
    }, params);

    let signString = '';
    let sparator = '';
    let keys = Object.keys(attributes);
    keys = keys.sort();
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] == 'sign' || typeof attributes[keys[i]] === undefined || attributes[keys[i]] === null) continue;
      signString += sparator + keys[i] + '=' + attributes[keys[i]];
      sparator = '&';
    }

    let key = this.merchant.getV2SecretKey();
    if (!key) {
      throw new Error('Missing V2 API key.');
    }
    signString += '&key=' + key;

    let sign = '';
    let type = params['sign_type'] ? (params['sign_type'] + '').toLowerCase() : 'md5';
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

    params.sign = (sign + '').toUpperCase();

    return params;
  }
}

export = LegacySignature;
