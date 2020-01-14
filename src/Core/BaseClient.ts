'use strict';

import BaseAccessToken from './BaseAccessToken';
import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import { applyMixins, isIp } from './Utils';

class BaseClient implements HttpMixin
{
  protected accessToken: BaseAccessToken = null;
  protected app: BaseApplication = null;

  constructor(app: BaseApplication, accessToken: BaseAccessToken = null)
  {
    this.app = app;
    this.accessToken = accessToken || this.app['access_token'];
  }

  setAccessToken(accessToken): BaseClient
  {
    this.accessToken = accessToken;

    return this;
  }

  getAccessToken(): BaseAccessToken
  {
    return this.accessToken;
  }

  async requestWithAccessToken(payload: object): Promise<any>
  {
    if (!payload['qs']) {
      payload['qs'] = {};
    }
    if (this.accessToken) {
      payload['qs'].accessToken = await this.accessToken['getToken']();
    }
    if (!payload['method']) {
      payload['method'] = 'POST';
    }
    await this.request(payload);
  }


  // Rewrite by HttpMixin
  async httpGet(url: string, payload: object = null): Promise<any> {}
  async httpPost(url: string, payload: object = null): Promise<any> { }
  async httpFile(url: string, payload: object = null): Promise<any> { }
  async request(payload: object): Promise<any> { }

};

applyMixins(BaseClient, [HttpMixin]);

export default BaseClient;
