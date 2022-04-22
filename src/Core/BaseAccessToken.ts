'use strict';

import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import { createHash, applyMixins, strCamel } from './Utils';
import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

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

  constructor(info: object = null, keysMap: Record<string, string> = {}) {
    if (info) {
      Object.keys(info).map(key => {
        this[key] = info[key] || info[strCamel(key)] || '';
      });

      if (keysMap) {
        Object.keys(keysMap).map(key => {
          let mapKey = keysMap[key];
          this[key] = info[mapKey] || info[strCamel(mapKey)] || '';
        });
      }
    }
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
  protected cachePrefix: string = 'easywechat.kernel.access_token.';
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
    return this.cachePrefix + createHash(JSON.stringify(await this.getCredentials()), 'md5');
  }

  async requestToken(credentials: object): Promise<any>
  {
    let payload: AxiosRequestConfig = {
      url: await this.getEndpoint(),
      method: this.requestMethod as Method,
    }
    if (this.requestMethod == 'POST') {
      payload.data = credentials;
    }
    else {
      payload.params = credentials;
    }
    let response =  await this.doRequest(payload);
    return response.data;
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
      if (token) return this.warpAccessToken(token);
    }

    let res = await this.requestToken(await this.getCredentials());
    await this.setToken(res, res.expires_in || 7200);

    return this.warpAccessToken(res);
  }

  /**
   * 包装为授权后的 AccessToken 对象
   * @param token 接口返回的数据
   * @returns
   */
  protected warpAccessToken(token: Record<string, any>): AccessToken {
    return new AccessToken(token);
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

  async applyToRequest(payload: AxiosRequestConfig): Promise<object>
  {
    payload.params = payload.params || {};
    if (!payload.params[this.queryName || this.tokenKey]) {
      payload.params[this.queryName || this.tokenKey] = (await this.getToken())[this.tokenKey];
    }
    return payload;
  }


  // Rewrite by HttpMixin
  async doRequest(payload: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return null;
  }

};

applyMixins(BaseAccessToken, [HttpMixin]);

export default BaseAccessToken;
