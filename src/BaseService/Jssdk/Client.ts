'use strict';

import BaseClient from '../../Core/BaseClient';
import { randomString, getTimestamp, makeSignature } from '../../Core/Utils';

export default class Client extends BaseClient
{
  private url: string = '';
  private endpoint: string = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket';

  setUrl(url: string): void
  {
    this.url = url;
  }

  async getTicket(force: boolean = false, type: string = 'jsapi'): Promise<string>
  {
    let cacheKey = `node-easywechat.access_token.${type}.${this.getAppId()}`;
    let jssdkTicket = await this.app.getCache().fetch(cacheKey);
    if (force || !jssdkTicket) {
      let res = await this.requestWithAccessToken({
        url: this.endpoint,
        method: 'get',
        qs: {
          type,
        },
      });
      await this.app.getCache().save(cacheKey, res.ticket, res.expires_in - 500);
      jssdkTicket = res.ticket;
    }

    return jssdkTicket;
  }

  async buildConfig(APIs: [], debug: boolean = false, beta: boolean = false, json: boolean = true): Promise<any>
  {
    let jssdkTicket = await this.getTicket();

    let noncestr = randomString();
    let timestamp = getTimestamp();
    let signature = makeSignature({
      jsapi_ticket: jssdkTicket,
      noncestr,
      timestamp,
      url: this.url,
    });

    let config = {
      appId: this.getAppId(),
      beta,
      debug,
      jsApiList: APIs,
      nonceStr: noncestr,
      signature,
      timestamp,
      url: this.url,
    }

    /* 使用完清空设置的url */
    this.url = '';

    return json ? JSON.stringify(config) : config;
  }

  getAppId(): string
  {
    return this.app['config']['app_id'];
  }
}
