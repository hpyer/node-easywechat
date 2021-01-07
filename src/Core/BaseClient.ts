'use strict';

import BaseAccessToken from './BaseAccessToken';
import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import { merge, applyMixins, isString } from './Utils';
import Fs from 'fs';
import Response from './Http/Response';

abstract class BaseClient implements HttpMixin
{
  protected accessToken: BaseAccessToken = null;
  protected app: BaseApplication = null;

  constructor(app: BaseApplication, accessToken: BaseAccessToken = null)
  {
    this.app = app;
    this.accessToken = accessToken || this.app.access_token;
  }

  setAccessToken(accessToken: BaseAccessToken): this
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
    if (!payload['method']) {
      payload['method'] = 'POST';
    }
    if (!payload['qs']) {
      payload['qs'] = {};
    }
    if (this.accessToken) {
      payload = await this.accessToken.applyToRequest(payload);
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

    formData = merge(formData, form);

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

  async requestRaw(payload: object): Promise<Response>
  {
    payload = payload || {};
    payload['encoding'] = null;
    let res = await this.request(payload, true);
    return new Response(res.body, res.statusCode, res.headers);
  }


  // Rewrite by HttpMixin
  async doRequest(payload: object, returnResponse: Boolean = false): Promise<any> { }

};

applyMixins(BaseClient, [HttpMixin]);

export default BaseClient;
