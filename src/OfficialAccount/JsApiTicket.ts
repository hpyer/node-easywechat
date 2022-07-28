'use strict';

import { createHash, getTimestamp, randomString } from '../Core/Support/Utils';
import AccessToken from './AccessToken';

class JsApiTicket extends AccessToken
{
  /**
   * 获取jsapi_ticket的缓存名称
   * @returns
   */
  getKey(): string {
    if (!this.key) {
      this.key = `official_account.jsapi_ticket.${this.appId}`;
    }
    return this.key;
  }

  /**
   * 获取签名凭证jsapi_ticket
   * @returns
   */
  async getTicket(): Promise<string>
  {
    let key = this.getKey();
    let ticket = await this.cache.get(key);
    if (!!ticket && typeof ticket === 'string') {
      return ticket;
    }

    let response = (await this.httpClient.request(
      'get',
      '/cgi-bin/ticket/getticket',
      {
        params: {
          type: 'jsapi',
        }
      }
    )).toObject();

    if (!response['ticket']) {
      throw new Error('Failed to get jssdk_ticket: ' + JSON.stringify(response));
    }

    await this.cache.set(key, response['ticket'], parseInt(response['expires_in']));

    return response['ticket'];
  }

  /**
   * 获取签名配置
   * @param url 完整URL地址
   * @param nonce 随机字符串，默认：随机10位
   * @param timestamp 时间长，默认：当前时间
   * @returns
   */
  async configSignature(url: string, nonce: string = null, timestamp: number = null): Promise<Record<string, any>>
  {
    nonce = nonce || randomString(10);
    timestamp = timestamp || getTimestamp();
    let ticket = await this.getTicket();

    return {
      url,
      nonceStr: nonce,
      timestamp,
      appId: this.appId,
      signature: this.getTicketSignature(ticket, nonce, timestamp, url),
    };
  }

  protected getTicketSignature(ticket: string, nonce: string, timestamp: number, url: string): string
  {
    return createHash(`jsapi_ticket=${ticket}&noncestr=${nonce}&timestamp=${timestamp}&url=${url}`, 'sha1');
  }

};

export = JsApiTicket;
