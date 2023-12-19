'use strict';

import { buildQueryString, getTimestamp, randomString } from "../Core/Support/Utils";
import MerchantInterface from "./Contracts/MerchantInterface";
import merge from 'merge';
import { AxiosRequestConfig } from "axios";
import RSA from "../Core/Support/RSA";

class Signature {
  constructor(
    protected merchant: MerchantInterface,
  ) { }

  /**
   * V3版本的签名计算
   * @param method 请求方式
   * @param url 请求地址
   * @param payload 请求载荷
   * @param nonce 随机串，默认：随机生成
   * @param timestamp 时间戳，默认：当前时间
   * @returns
   */
  createHeader(method: string, url: string, payload: AxiosRequestConfig<any>, nonce: string = null, timestamp: number = null): string {
    let pathname = url;
    if (url.startsWith('https://') || url.startsWith('http://')) {
      let urlObj = new URL(url);
      let search = buildQueryString(merge(true, urlObj.searchParams, payload.params));
      pathname = urlObj.pathname + (search ? '?' + search : '');
    }
    else {
      let search = '';
      if (payload.params) {
        if (typeof payload.params === 'string') {
          search = payload.params.replace(/^\?|&/, '');
        }
        else if (Object.keys(payload.params).length > 0) {
          search = buildQueryString(payload.params);
        }
      }
      if (search) {
        pathname += (pathname.indexOf('?') > -1 ? '&' : '?') + search;
      }
    }

    if (!nonce) nonce = randomString();
    if (!timestamp) timestamp = getTimestamp();
    let body = '';
    if (payload.data) {
      if (typeof payload.data === 'object') {
        body = JSON.stringify(payload.data);
      }
      else {
        body = payload.data;
      }
    }

    let signString = `${method.toUpperCase()}\n${pathname}\n${timestamp}\n${nonce}\n${body}\n`;

    let rsa = new RSA;
    rsa.setPublicKey(this.merchant.getCertificate().toString());
    rsa.setPrivateKey(this.merchant.getPrivateKey().toString());

    let sign = rsa.sign(signString);

    return `WECHATPAY2-SHA256-RSA2048 mchid="${this.merchant.getMerchantId()}",nonce_str="${nonce}",timestamp="${timestamp}",serial_no="${this.merchant.getCertificate().getSerialNo()}",signature="${sign}"`;
  }
}

export = Signature;
