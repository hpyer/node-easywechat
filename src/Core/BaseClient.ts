'use strict';

import BaseAccessToken from './BaseAccessToken';
import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import { applyMixins, isString } from './Utils';
import Fs from 'fs';
import Response from './Http/Response';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import FormData from 'form-data';

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

  async request(payload: AxiosRequestConfig, returnResponse: Boolean = false): Promise<AxiosResponse<any>>
  {
    payload = payload || {};
    if (!payload.method) {
      payload.method = 'POST';
    }
    if (!payload.params) {
      payload.params = {};
    }
    if (this.accessToken) {
      payload = await this.accessToken.applyToRequest(payload);
    }
    let response = await this.doRequest(payload);
    return returnResponse ? response : response.data;
  }

  httpUpload(url: string, files: object = {}, form: object = {}, query: object = {}): Promise<any>
  {
    let formData = new FormData;

    for (let name in files) {
      if (isString(files[name])) {
        formData.append(name, Fs.createReadStream(files[name]));
      }
      else {
        formData.append(name, files[name]);
      }
    }

    for (let name in form) {
      formData.append(name, form[name]);
    }

    return this.request({
      url,
      data: formData,
      method: 'POST',
      params: query,
    });
  }

  httpGet(url: string, query: object = {}): Promise<any>
  {
    return this.request({
      url,
      method: 'GET',
      params: query,
    });
  }

  httpPost(url: string, formData: object = {}): Promise<any>
  {
    return this.request({
      url,
      method: 'POST',
      data: formData,
    });
  }

  httpPostJson(url: string, data: object = {}, query: object = {}): Promise<any>
  {
    return this.request({
      url,
      method: 'POST',
      data: data,
      params: query,
    });
  }

  async requestRaw(payload: AxiosRequestConfig): Promise<Response>
  {
    payload = payload || {};
    payload.responseType = 'arraybuffer';
    let res = await this.request(payload, true);
    return new Response(res.data, res.status, res.headers);
  }


  // Rewrite by HttpMixin
  async doRequest(payload: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return null;
  }

};

applyMixins(BaseClient, [HttpMixin]);

export default BaseClient;
