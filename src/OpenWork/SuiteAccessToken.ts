'use strict';

import CacheInterface from "../Core/Contracts/CacheInterface";
import HttpClientInterface from "../Core/HttpClient/Contracts/HttpClientInterface";
import RefreshableAccessTokenInterface from "../Core/Contracts/RefreshableAccessTokenInterface";
import HttpClient from "../Core/HttpClient/HttpClient";
import SuiteTicketInterface from "./Contracts/SuiteTicketInterface";

class SuiteAccessToken implements RefreshableAccessTokenInterface
{
  constructor(
    protected suiteId: string,
    protected suiteSecret: string,
    protected suiteTicket: SuiteTicketInterface,
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
   * 获取access_token的缓存名称
   * @returns
   */
  getKey(): string {
    if (!this.key) {
      this.key = `open_work.suite_access_token.${this.suiteId}`;
    }
    return this.key;
  }

  /**
   * 设置access_token的缓存名称
   * @param key
   * @returns
   */
  setKey(key: string): this {
    this.key = key;
    return this;
  }

  async getToken(): Promise<string> {
    let token: string = '';
    if (this.cache) {
      token = await this.cache.get(this.getKey());
    }
    if (!!token && typeof token === 'string') {
      return token;
    }
    return this.refresh();
  }

  async toQuery(): Promise<Record<string, any>> {
    return {
      suite_access_token: await this.getToken(),
    };
  }

  async refresh(): Promise<string> {
    let response = (await this.httpClient.request(
      'post',
      'cgi-bin/service/get_suite_token',
      {
        json: {
          suite_id: this.suiteId,
          suite_secret: this.suiteSecret,
          suite_ticket: await this.suiteTicket.getTicket(),
        }
      }
    )).toObject();

    if (!response['suite_access_token']) {
      throw new Error('Failed to get suite_access_token: ' + JSON.stringify(response));
    }

    if (this.cache) {
      await this.cache.set(this.getKey(), response['suite_access_token'], parseInt(response['expires_in']) - 100);
    }

    return response['suite_access_token'];
  }

}

export = SuiteAccessToken;
