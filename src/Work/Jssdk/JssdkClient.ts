'use strict';

import BaseClient from '../../BaseService/Jssdk/JssdkClient';
import { getTimestamp, merge, randomString } from '../../Core/Utils';

export default class JssdkClient extends BaseClient
{

  protected ticketEndpoint: string = 'https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket';

  getAppId(): string
  {
    return this.app.config.corp_id;
  }

  async getAgentConfigArray(
    apis: Array<string>,
    agentId: string,
    debug: boolean = false,
    beta: boolean = false,
    openTagList: Array<string> = [],
    url: string = ''
  ): Promise<object>
  {
    return this.buildAgentConfig(apis, agentId, debug, beta, false, openTagList, url);
  }

  async buildAgentConfig(
    jsApiList: Array<string>,
    agentId: string,
    debug: boolean,
    beta: boolean,
    json: true,
    openTagList: Array<string>,
    url: string
  ): Promise<string>;
  async buildAgentConfig(
    jsApiList: Array<string>,
    agentId: string,
    debug: boolean,
    beta: boolean,
    json: false,
    openTagList: Array<string>,
    url: string
  ): Promise<object>;
  async buildAgentConfig(
    jsApiList: Array<string>,
    agentId: string,
    debug: boolean = false,
    beta: boolean = false,
    json: true | false,
    openTagList: Array<string> = [],
    url: string = ''
  ) {
    let config = merge({
      debug,
      beta,
      jsApiList,
      openTagList,
    }, await this.agentConfigSignature(agentId, url));

    return json ? JSON.stringify(config) : config;
  }

  async agentConfigSignature(agentId: string, url: string = '', nonce: string = '', timestamp: string = ''): Promise<object>
  {
    url = url || this.getUrl();
    nonce = nonce || randomString(10);
    timestamp = timestamp || getTimestamp() + '';
    let ticket = await this.getAgentTicket(agentId);

    return {
      corpid: this.getAppId(),
      agentid: agentId,
      nonceStr: nonce,
      timestamp: timestamp,
      url: url,
      signature: this.getTicketSignature(ticket['ticket'], nonce, timestamp, url),
    };
  }

  /**
   * 获取代理签名凭证api_ticket
   * @param refresh 是否强制刷新
   * @param type 类型，默认：jsapi
   */
  async getAgentTicket(agentId: string, refresh: boolean = false, type: string = 'agent_config'): Promise<object>
  {
    let cacheKey = `easywechat.work.jssdk.ticket.${agentId}.${type}.${this.getAppId()}`;

    let cacher = this.app.getCache();

    if (!refresh && await cacher.has(cacheKey)) {
      let ticket = await cacher.get(cacheKey);
      if (ticket) return ticket;
    }

    let res = await this.request({
      url: 'cgi-bin/ticket/get',
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
   * 获取签名凭证api_ticket
   * @param refresh 是否强制刷新
   * @param type 类型，默认：jsapi
   */
  async getTicket(refresh: boolean = false, type: string = 'config'): Promise<string>
  {
    let cacheKey = `easywechat.work.jssdk.ticket.${type}.${this.getAppId()}`;

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

}
