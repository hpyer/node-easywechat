'use strict';

import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import { createHash, applyMixins } from './Utils';

/**
 * 授权后的AccessToken对象
 */
export class AccessToken {
  /**
   * 网页授权接口调用凭证
   */
  access_token: string = '';
  /**
   * 调用凭证的超时时间，单位（秒）
   */
  expires_in: number = 0;
  /**
   * 刷新access_token
   */
  refresh_token: string = '';
  /**
   * 用户唯一标识，openid
   */
  openid: string = '';
  /**
   * 授权的作用域
   */
  scope: string = null;

  constructor(info: object) {
    this.access_token = info['access_token'] || info['accessToken'] || '';
    this.expires_in = info['expires_in'] || info['expiresIn'] || 0;
    this.refresh_token = info['refresh_token'] || info['refreshToken'] || '';
    this.openid = info['openid'] || '';
    this.scope = info['scope'] || '';
  }

  /**
   * 获取access_token
   */
  getToken(): string {
    return this.access_token;
  }
  /**
   * 获取access_token
   */
  getAccessToken(): string {
    return this.access_token;
  }
  /**
   * 获取过期时间
   */
  getExpires(): number {
    return this.expires_in;
  }
  /**
   * 获取refresh_token
   */
  getRefreshToken(): string {
    return this.refresh_token;
  }
  /**
   * 获取openid
   */
  getOpenid(): string {
    return this.openid;
  }
  /**
   * 获取scope
   */
  getScope(): string {
    return this.scope;
  }
};

abstract class BaseAccessToken implements HttpMixin
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
  async getToken(refresh: boolean = false): Promise<AccessToken>
  {
    let cacheKey = await this.getCacheKey();
    let cache = this.app.getCache();

    if (!refresh && await cache.has(cacheKey)) {
      let token = await cache.get(cacheKey);
      if (token) return new AccessToken(token);
    }

    let res = await this.requestToken(await this.getCredentials());
    await this.setToken(res, res.expires_in || 7200);

    return res;
  }

  /**
   * 设置Token
   * @param access_token AccessToken
   * @param expires_in 有效时间，单位：秒
   */
  async setToken(access_token: string, expires_in: number = 7200): Promise<this>
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
  async refresh(): Promise<this>
  {
    await this.getToken(true);
    return this;
  }

  /**
   * 获取刷新后的Token
   */
  getRefreshedToken(): Promise<AccessToken>
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
      payload['qs'][this.queryName || this.tokenKey] = (await this.getToken())[this.tokenKey];
    }
    return payload;
  }


  // Rewrite by HttpMixin
  async doRequest(payload: object, returnResponse: Boolean = false): Promise<any> { }

};

applyMixins(BaseAccessToken, [HttpMixin]);

export default BaseAccessToken;
