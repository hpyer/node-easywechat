'use strict';

import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import BaseApplicatioin from '../BaseApplication';
import { merge } from '../Utils';
import FormData from 'form-data';

export default class HttpMixin
{

  async doRequest(payload: AxiosRequestConfig): Promise<AxiosResponse<any>>
  {
    let opts = merge({}, payload || {}) as AxiosRequestConfig;
    if (typeof opts.baseURL == 'undefined' && this['baseUrl']) {
      opts.baseURL = this['baseUrl'];
    }
    if (opts.url.substr(0, 7) == 'http://' || opts.url.substr(0, 8) == 'https://') {
      delete opts.baseURL;
    }
    if (typeof opts.method == 'undefined') {
      opts.method = 'post';
    }
    if (!opts.responseType) {
      opts.responseType = 'json';
    }
    if (this['app'] && this['app'] instanceof BaseApplicatioin) {
      opts = merge(merge({}, this['app'].config.http || {}), opts);
    }
    if (opts.data && opts.data instanceof FormData) {
      opts.headers = merge(opts.headers || {}, opts.data.getHeaders());
      opts.headers['Content-Length'] = await new Promise((resolve, reject) => {
        opts.data.getLength((err, length) => {
          if (err) {
            resolve(0);
          }
          else {
            resolve(length);
          }
        });
      });
    }
    this['app']['log']('debug', 'doRequest', opts);
    return Axios.request(opts);
  }

};
