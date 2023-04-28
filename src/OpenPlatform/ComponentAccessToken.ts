'use strict';

import CacheInterface from "../Core/Contracts/CacheInterface";
import HttpClientInterface from "../Core/HttpClient/Contracts/HttpClientInterface";
import RefreshableAccessTokenInterface from "../Core/Contracts/RefreshableAccessTokenInterface";
import HttpClient from "../Core/HttpClient/HttpClient";
import FileCache from "../Core/Cache/FileCache";
import VerifyTicketInterface from "./Contracts/VerifyTicketInterface";

class ComponentAccessToken implements RefreshableAccessTokenInterface
{
  constructor(
    protected appId: string,
    protected secret: string,
    protected verifyTicket: VerifyTicketInterface,
    protected key: string = null,
    protected cache: CacheInterface = null,
    protected httpClient: HttpClientInterface = null
  ) {
    if (!this.httpClient) {
      this.httpClient = HttpClient.create({
        baseURL: 'https://api.weixin.qq.com/',
      });
    }
  }

  /**
   * 获取access_token的缓存名称
   * @returns
   */
  getKey(): string {
    if (!this.key) {
      this.key = `open_platform.component_access_token.${this.appId}`;
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
      component_access_token: await this.getToken(),
    };
  }

  async refresh(): Promise<string> {
    let response = (await this.httpClient.request(
      'post',
      'cgi-bin/component/api_component_token',
      {
        data: {
          component_appid: this.appId,
          component_appsecret: this.secret,
          component_verify_ticket: await this.verifyTicket.getTicket(),
        }
      }
    )).toObject();

    if (!response['component_access_token']) {
      throw new Error('Failed to get component_access_token: ' + JSON.stringify(response));
    }

    if (this.cache) {
      await this.cache.set(this.getKey(), response['component_access_token'], parseInt(response['expires_in']) - 100);
    }

    return response['component_access_token'];
  }

}

export = ComponentAccessToken;
