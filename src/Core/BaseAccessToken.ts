'use strict';

import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import { createHash, applyMixins } from './Utils';

class BaseAccessToken implements HttpMixin
{
  protected requestMethod: string = 'GET';
  protected token: string = '';
  protected queryName: string = '';
  protected tokenKey: string = 'access_token';
  protected endpointToGetToken: string = '';
  protected app: BaseApplication = null;

  constructor(app: BaseApplication)
  {
    this.app = app;
  }

  protected async getCredentials(): Promise<object>
  {
    return {};
  }

  async getEndpoint(): Promise<string>
  {
    if (!this.endpointToGetToken) {
      throw new Error('Unset the endpoint of AccessToken');
    }
    return this.endpointToGetToken;
  }

  async getCacheKey(): Promise<string>
  {
    return 'easywechat.kernel.access_token.' + createHash(JSON.stringify(await this.getCredentials()), 'md5');
  }

  async requestToken(credentials: object): Promise<any>
  {
    let payload = {
      url: await this.getEndpoint(),
      method: this.requestMethod,
    }
    if (this.requestMethod == 'POST') {
      payload['json'] = true;
      payload['body'] = credentials;
    }
    else {
      payload['qs'] = credentials;
    }
    return await this.doRequest(payload);
  };

  /**
   * 获取Token
   * @param refresh 为true时表示强制刷新
   */
  async getToken(refresh: boolean = false): Promise<string>
  {
    let cacheKey = await this.getCacheKey();
    let cache = this.app.getCache();

    if (!refresh && await cache.has(cacheKey)) {
      let token = await cache.get(cacheKey);
      if (token) return token;
    }

    let res = await this.requestToken(await this.getCredentials());
    await this.setToken(res[this.tokenKey], res.expires_in || 7200);

    return res[this.tokenKey];
  }

  /**
   * 设置Token
   * @param access_token AccessToken
   * @param expires_in 有效时间，单位：秒
   */
  async setToken(access_token: string, expires_in: number = 7200): Promise<BaseAccessToken>
  {
    let cacheKey = await this.getCacheKey();
    let cache = this.app.getCache();

    await cache.set(cacheKey, access_token, expires_in);

    if (!cache.has(cacheKey)) {
      throw new Error('Failed to cache access token.');
    }

    return this;
  };

  /**
   * 刷新Token
   */
  async refresh(): Promise<BaseAccessToken>
  {
    await this.getToken(true);
    return this;
  }

  /**
   * 获取刷新后的Token
   */
  getRefreshedToken(): Promise<string>
  {
    return this.getToken(true);
  }

  getTokenKey(): string
  {
    return this.tokenKey;
  }

  async applyToRequest(payload: object): Promise<object>
  {
    payload['qs'] = payload['qs'] || {};
    if (!payload['qs'][this.queryName || this.tokenKey]) {
      payload['qs'][this.queryName || this.tokenKey] = await this.getToken();
    }
    return payload;
  }


  // Rewrite by HttpMixin
  async doRequest(payload: object, returnResponse: Boolean = false): Promise<any> { }

};

applyMixins(BaseAccessToken, [HttpMixin]);

export default BaseAccessToken;
