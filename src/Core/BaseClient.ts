'use strict';

import BaseAccessToken from './BaseAccessToken';
import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import { applyMixins, isIp, isString } from './Utils';
import * as Fs from 'fs';
import * as Merge from 'merge';

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

  async request(payload: object, returnResponse: Boolean = false): Promise<any>
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
    return this.doRequest(payload, returnResponse);
  }

  httpUpload(url: string, files: object = {}, form: object = {}, query: object = {}): Promise<any>
  {
    let formData = {};

    for (let name in files) {
      if (isString(files[name])) {
        formData[name] = Fs.createReadStream(files[name]);
      }
      else {
        formData[name] = files[name];
      }
    }

    formData = Merge(formData, form);

    return this.request({
      url,
      formData,
      method: 'POST',
      qs: query,
    });
  }

  httpGet(url: string, query: object = {}): Promise<any>
  {
    let payload = {
      url,
      method: 'GET',
      qs: query,
    };
    return this.request(payload);
  }

  httpPost(url: string, formData: object = {}): Promise<any>
  {
    let payload = {
      url,
      method: 'POST',
      formData,
    };
    return this.request(payload);
  }

  httpPostJson(url: string, data: object = {}, query: object = {}): Promise<any>
  {
    let payload = {
      url,
      method: 'POST',
      json: true,
      body: data,
      qs: query,
    };
    return this.request(payload);
  }

  requestRaw(payload: object): Promise<any>
  {
    payload = payload || {};
    payload['encoding'] = null;
    return this.request(payload, true);
  }


  // Rewrite by HttpMixin
  async doRequest(payload: object, returnResponse: Boolean = false): Promise<any> { }

};

applyMixins(BaseClient, [HttpMixin]);

export default BaseClient;
