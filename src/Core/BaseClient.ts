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

  /**
   * 发送请求
   * @param payload axios请求参数
   * @param returnResponse 是否返回axios响应对象，默认false表示直接返回数据
   */
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

  /**
   * 上传文件请求
   * @param url 地址
   * @param files 文件键值对，键名为文件字段，键值为文件路径或可读流
   * @param form 其它表单参数键值对
   * @param query querystring参数键值对
   */
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

  /**
   * Get请求
   * @param url 地址
   * @param query querystring参数键值对
   */
  httpGet(url: string, query: object = {}): Promise<any>
  {
    return this.request({
      url,
      method: 'GET',
      params: query,
    });
  }

  /**
   * Post请求
   * @param url 地址
   * @param data body数据，详见 axios 请求配置的 data 参数
   */
  httpPost(url: string, data: object = {}): Promise<any>
  {
    return this.request({
      url,
      method: 'POST',
      data: data,
    });
  }

  /**
   * Post请求（JSON数据）
   * @param url 地址
   * @param data body数据，详见 axios 请求配置的 data 参数
   * @param query querystring参数键值对
   */
  httpPostJson(url: string, data: object = {}, query: object = {}): Promise<any>
  {
    return this.request({
      url,
      method: 'POST',
      data: data,
      params: query,
    });
  }

  /**
   * 发送请求并返回原始数据，主要用于下载文件等。返回封装过的Response对象
   * @param payload axios请求参数
   */
  async requestRaw(payload: AxiosRequestConfig): Promise<Response>
  {
    payload = payload || {};
    payload.responseType = 'arraybuffer';
    let res = await this.request(payload, true);
    let config: object = {};
    let keys: string[] = ['url', 'baseURL', 'method', 'params', 'headers'];
    keys.map(key => {
      if (typeof payload[key] === 'string' || typeof payload[key] === 'number') {
        config[key] = payload[key];
      }
      else if (typeof payload[key] === 'object') {
        if (payload[key] === null) {
          config[key] = null;
        }
        else {
          config[key] = JSON.parse(JSON.stringify(payload[key]));
        }
      }
    });
    return new Response(res.data, res.status, res.headers, config);
  }


  // Rewrite by HttpMixin
  async doRequest(payload: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return null;
  }

};

applyMixins(BaseClient, [HttpMixin]);

export default BaseClient;
