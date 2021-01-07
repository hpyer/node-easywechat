'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge, randomString, getTimestamp, createHash } from '../../Core/Utils';

export default class Client extends BaseClient
{
  protected url: string = '';
  protected ticketEndpoint: string = 'cgi-bin/ticket/getticket';

  /**
   * 获取签名凭证api_ticket
   * @param refresh 是否强制刷新
   * @param type 类型，默认：jsapi
   */
  async getTicket(refresh: boolean = false, type: string = 'jsapi'): Promise<string>
  {
    let cacheKey = `easywechat.basic_service.jssdk.ticket.${type}.${this.getAppId()}`;

    let cacher = this.app.getCache();

    if (!refresh && await cacher.has(cacheKey)) {
      let ticket = await cacher.get(cacheKey);
      if (ticket) return ticket;
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

  /**
   * 获取JSSDK的配置
   * @param {Array<string>} jsApiList API列表
   * @param {Boolean} debug 是否调试模式，默认：false
   * @param {Boolean} beta 是否测试模式，默认：false
   * @param {Boolean} json true时返回JSON字符串，默认：true
   * @param {Array<string>} openTagList 开放标签列表，默认：[]
   * @param {string} url 请求URL，默认：当前URL
   */
  async buildConfig(jsApiList: Array<string>, debug: Boolean = false, beta: Boolean = false, json: Boolean = true, openTagList: Array<string> = [], url: string = ''): Promise<any>
  {
    let config = merge({
      jsApiList, debug, beta, openTagList
    }, await this.configSignature(url));

    return json ? JSON.stringify(config) : config;
  }

  /**
   * 获取JSSDK的配置对象
   * @param {Array<string>} jsApiList API列表
   * @param {Boolean} debug 是否调试模式，默认：false
   * @param {Boolean} beta 是否测试模式，默认：false
   * @param {Array<string>} openTagList 开放标签列表，默认：[]
   * @param {string} url 请求URL，默认：当前URL
   */
  getConfigArray(jsApiList: Array<string>, debug: Boolean = false, beta: Boolean = false, openTagList: Array<string> = [], url: string = ''): Promise<any>
  {
    return this.buildConfig(jsApiList, debug, beta, false, openTagList, url);
  }

  /**
   * 获取签名配置
   * @param {string} url 完整的URL地址
   * @param {string} nonce 随机字符串，默认：随机10位
   * @param {string} timestamp 时间戳，默认：当前时间
   */
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

  protected getTicketSignature(ticket: string, nonce: string, timestamp: string, url: string): string
  {
    return createHash(`jsapi_ticket=${ticket}&noncestr=${nonce}&timestamp=${timestamp}&url=${url}`, 'sha1');
  }

  protected dictionaryOrderSignature(args: Array<string>): string
  {
    let params = [];
    for (let i in args) {
      params.push(args[i]);
    }
    params.sort();

    return createHash(params.join(''), 'sha1');
  }

  /**
   * 设置当前URL
   * @param {string} url 完整的URL地址
   */
  setUrl(url: string): this
  {
    this.url = url;

    return this;
  }

  /**
   * 获取当前设置的URL
   */
  getUrl(): string
  {
    return this.url;
  }

  /**
   * 获取配置中的app_id
   */
  getAppId(): string
  {
    return this.app.config.app_id;
  }

}
