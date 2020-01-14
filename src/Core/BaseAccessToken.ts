'use strict';

import * as Qs from 'qs';
import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import { createHash, applyMixins } from './Utils';

class BaseAccessToken implements HttpMixin
{
  protected token: string = '';
  protected endpoint: string = '';
  protected app: BaseApplication = null;

  constructor(app: BaseApplication)
  {
    this.app = app;
  }

  getCredentials(): object
  {
    return {};
  }

  getEndpoint(): string
  {
    if (!this.endpoint) {
      throw new Error('未设置获取 AccessToken 的接口地址');
    }
    return this.endpoint;
  }

  getCacheKey(): string
  {
    return 'easywechat.kernel.access_token.' + createHash(JSON.stringify(this.getCredentials()), 'md5');
  }

  async requestToken(credentials: object): Promise<any>
  {
    let url = this.getEndpoint() + '?' + Qs.stringify(credentials);
    return await this.httpGet(url);
  };

  async getToken(force: boolean = false): Promise<string>
  {
    if (force) {
      let res = await this.requestToken(this.getCredentials());
      await this.setToken(res.access_token, res.expires_in);
      return this.token;
    }

    if (!this.token) {
      this.token = await this.app.getCache().fetch(this.getCacheKey());

      if (!this.token) {
        let res = await this.requestToken(this.getCredentials());
        await this.setToken(res.access_token, res.expires_in);
      }
    }
    return this.token;
  }

  async setToken(access_token: string, expires_in: number = 7200): Promise<any>
  {
    this.token = access_token;
    await this.app.getCache().save(this.getCacheKey(), access_token, expires_in);
  };

  async refresh(): Promise<object>
  {
    await this.getToken(true);
    return this;
  }


  // Rewrite by HttpMixin
  async httpGet(url: string, payload: object = null): Promise<any> { }
  async httpPost(url: string, payload: object = null): Promise<any> { }
  async httpFile(url: string, payload: object = null): Promise<any> { }
  async request(payload: object): Promise<any> { }

};

applyMixins(BaseAccessToken, [HttpMixin]);

export default BaseAccessToken;
