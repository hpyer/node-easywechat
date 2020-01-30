'use strict';

import BaseClient from '../../Core/BaseClient';
import * as Merge from 'merge';
import { randomString, getTimestamp, createHash } from '../../Core/Utils';

export default class Client extends BaseClient
{
  protected url: string = '';
  protected ticketEndpoint: string = 'cgi-bin/ticket/getticket';

  async getTicket(refresh: boolean = false, type: string = 'jsapi'): Promise<string>
  {
    let cacheKey = `easywechat.basic_service.jssdk.ticket.${type}.${this.getAppId()}`;

    let cacher = this.app.getCache();

    if (!refresh && await cacher.has(cacheKey)) {
      return await cacher.get(cacheKey);
    }

    let res = await this.request({
      url: this.ticketEndpoint,
      method: 'get',
      qs: {
        type,
      },
    });
    await cacher.set(cacheKey, res, res['expires_in'] - 500);

    if (!cacher.has(cacheKey)) {
      throw new Error('Failed to cache jssdk ticket.');
    }

    return res;
  }

  async buildConfig(jsApiList: Array<string>, debug: Boolean = false, beta: Boolean = false, json: Boolean = true): Promise<any>
  {
    let config = Merge({
      jsApiList, debug, beta
    }, await this.configSignature());

    return json ? JSON.stringify(config) : config;
  }

  async configSignature(url: string = '', nonce: string = '', timestamp: string = ''): Promise<object>
  {
    url = url || this.getUrl();
    nonce = nonce || randomString(10);
    timestamp = timestamp || getTimestamp() + '';
    let ticket = await this.getTicket();

    return {
      appId: this.getAppId(),
      nonceStr: nonce,
      timestamp: timestamp,
      url: url,
      signature: this.getTicketSignature(ticket['ticket'], nonce, timestamp, url),
    };
  }

  getTicketSignature(ticket: string, nonce: string, timestamp: string, url: string): string
  {
    return createHash(`jsapi_ticket=${ticket}&noncestr=${nonce}&timestamp=${timestamp}&url=${url}`, 'sha1');
  }

  dictionaryOrderSignature(args: Array<string>): string
  {
    let params = [];
    for (let i in args) {
      params.push(args[i]);
    }
    params.sort();

    return createHash(params.join(''), 'sha1');
  }

  setUrl(url: string): object
  {
    this.url = url;

    return this;
  }

  getUrl(): string
  {
    return this.url;
  }

  getAppId(): string
  {
    return this.app['config']['app_id'];
  }

}
