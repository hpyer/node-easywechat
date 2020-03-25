'use strict';

import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import { createHash, applyMixins, buildQueryString } from './Utils';

class BaseAccessToken implements HttpMixin
{
  protected token: string = '';
  protected endpointToGetToken: string = '';
  protected app: BaseApplication = null;

  constructor(app: BaseApplication)
  {
    this.app = app;
  }

  protected getCredentials(): object
  {
    return {};
  }

  getEndpoint(): string
  {
    if (!this.endpointToGetToken) {
      throw new Error('Unset the endpoint of AccessToken');
    }
    return this.endpointToGetToken;
  }

  getCacheKey(): string
  {
    return 'easywechat.kernel.access_token.' + createHash(JSON.stringify(this.getCredentials()), 'md5');
  }

  async requestToken(credentials: object): Promise<any>
  {
    let url = this.getEndpoint() + '?' + buildQueryString(credentials);
    return await this.doRequest({
      url,
      method: 'GET',
    });
  };

  async getToken(force: boolean = false): Promise<string>
  {
    if (force) {
      let res = await this.requestToken(this.getCredentials());
      await this.setToken(res.access_token, res.expires_in);
      return this.token;
    }

    if (!this.token) {
      this.token = await this.app.getCache().get(this.getCacheKey());

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
    await this.app.getCache().set(this.getCacheKey(), access_token, expires_in);
  };

  async refresh(): Promise<object>
  {
    await this.getToken(true);
    return this;
  }


  // Rewrite by HttpMixin
  async doRequest(payload: object, returnResponse: Boolean = false): Promise<any> { }

};

applyMixins(BaseAccessToken, [HttpMixin]);

export default BaseAccessToken;
