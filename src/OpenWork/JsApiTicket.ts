'use strict';

import CacheInterface from '../Core/Contracts/CacheInterface';
import HttpClientInterface from '../Core/HttpClient/Contracts/HttpClientInterface';
import HttpClient from '../Core/HttpClient/HttpClient';
import { createHash, getTimestamp, randomString } from '../Core/Support/Utils';

class JsApiTicket
{
  constructor(
    protected corpId: string,
    protected key: string = null,
    protected cache: CacheInterface = null,
    protected httpClient: HttpClientInterface = null
  ) {
    if (!this.httpClient) {
      this.httpClient = HttpClient.create({
        baseURL: 'https://qyapi.weixin.qq.com/',
      });
    }
  }

  /**
   * 获取签名配置
   * @param url 完整URL地址
   * @param nonce 随机字符串，默认：随机10位
   * @param timestamp 时间长，默认：当前时间
   * @returns
   */
  async createConfigSignature(url: string, nonce: string = null, timestamp: number = null, jsApiList: string[] = [], debug: boolean = false, beta: boolean = true): Promise<Record<string, any>>
  {
    nonce = nonce || randomString(10);
    timestamp = timestamp || getTimestamp();
    let ticket = await this.getTicket();

    return {
      appId: this.corpId,
      nonceStr: nonce,
      timestamp,
      url,
      signature: this.getTicketSignature(ticket, nonce, timestamp, url),
      jsApiList,
      debug,
      beta,
    };
  }

  protected getTicketSignature(ticket: string, nonce: string, timestamp: number, url: string): string
  {
    return createHash(`jsapi_ticket=${ticket}&noncestr=${nonce}&timestamp=${timestamp}&url=${url}`, 'sha1');
  }

  /**
   * 获取jsapi_ticket的缓存名称
   * @returns
   */
  getKey(): string {
    if (!this.key) {
      this.key = `open_work.jsapi_ticket.${this.corpId}`;
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
    let ticket: string = '';
    if (this.cache) {
      ticket = await this.cache.get(key);
    }
    if (!!ticket && typeof ticket === 'string') {
      return ticket;
    }

    let response = (await this.httpClient.request(
      'get',
      '/cgi-bin/get_jsapi_ticket',
      {}
    )).toObject();

    if (!response['ticket']) {
      throw new Error('Failed to get jssdk_ticket: ' + JSON.stringify(response));
    }

    if (this.cache) {
      await this.cache.set(key, response['ticket'], parseInt(response['expires_in']));
    }

    return response['ticket'];
  }

  /**
   * 获取代理应用的签名配置
   * @param agentId 代理应用的id
   * @param url 完整URL地址
   * @param nonce 随机字符串，默认：随机10位
   * @param timestamp 时间长，默认：当前时间
   * @returns
   */
  async createAgentConfigSignature(agentId: number, url: string, nonce: string = null, timestamp: number = null, jsApiList: string[] = []): Promise<Record<string, any>>
  {
    nonce = nonce || randomString(10);
    timestamp = timestamp || getTimestamp();
    let ticket = await this.getTicket();

    return {
      corpid: this.corpId,
      agentid: agentId,
      url,
      nonceStr: nonce,
      timestamp,
      signature: this.getTicketSignature(ticket, nonce, timestamp, url),
      jsApiList,
    };
  }

  /**
   * 获取代理应用的签名凭证jsapi_ticket
   * @param agentId 代理应用的id
   * @returns
   */
  async getAgentTicket(agentId: number): Promise<string>
  {
    let key = this.getAgentKey(agentId);
    let ticket: string = '';
    if (this.cache) {
      ticket = await this.cache.get(key);
    }
    if (!!ticket && typeof ticket === 'string') {
      return ticket;
    }

    let response = (await this.httpClient.request(
      'get',
      '/cgi-bin/ticket/get',
      {
        params: {
          type: 'agent_config',
        }
      }
    )).toObject();

    if (!response['ticket']) {
      throw new Error('Failed to get jssdk agentTicket: ' + JSON.stringify(response));
    }

    if (this.cache) {
      await this.cache.set(key, response['ticket'], parseInt(response['expires_in']));
    }

    return response['ticket'];
  }

  /**
   * 获取代理应用的jsapi_ticket的缓存名称
   * @param agentId 代理应用的id
   * @returns
   */
  getAgentKey(agentId: number): string {
    return `${this.getKey()}.${agentId}`;
  }

};

export = JsApiTicket;
