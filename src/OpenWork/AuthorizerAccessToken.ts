'use strict';

import AccessTokenInterface from "../Core/Contracts/AccessTokenInterface";
import CacheInterface from "../Core/Contracts/CacheInterface";
import RefreshableAccessTokenInterface from "../Core/Contracts/RefreshableAccessTokenInterface";
import HttpClientInterface from "../Core/HttpClient/Contracts/HttpClientInterface";
import HttpClient from "../Core/HttpClient/HttpClient";

class AuthorizerAccessToken implements RefreshableAccessTokenInterface
{
  constructor(
    protected corpId: string,
    protected permanentCodeOrAccessToken: string,
    protected suiteAccessToken: AccessTokenInterface = null,
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
   * 获取appId
   * @returns
   */
  getCorpId(): string {
    return this.corpId;
  }

  /**
   * 获取access_token的缓存名称
   * @returns
   */
  getKey(): string {
    if (!this.key) {
      this.key = `open_work.authorizer.access_token.${this.corpId}.${this.permanentCodeOrAccessToken}`;
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
    if (!this.suiteAccessToken) {
      return this.permanentCodeOrAccessToken;
    }

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
      access_token: await this.getToken(),
    };
  }

  async refresh(): Promise<string> {
    let response = (await this.httpClient.request(
      'post',
      'cgi-bin/service/get_corp_token',
      {
        params: {
          suite_access_token: await this.suiteAccessToken.getToken(),
        },
        json: {
          auth_corpid: this.corpId,
          permanent_code: this.permanentCodeOrAccessToken,
        }
      }
    )).toObject();

    if (!response['access_token']) {
      throw new Error('Failed to get access_token: ' + JSON.stringify(response));
    }

    if (this.cache) {
      await this.cache.set(this.getKey(), response['access_token'], parseInt(response['expires_in']) - 100);
    }

    return response['access_token'];
  }

  /**
   * 转为字符串
   * @returns
   */
  toString() {
    return this.getToken();
  }

}

export = AuthorizerAccessToken;
