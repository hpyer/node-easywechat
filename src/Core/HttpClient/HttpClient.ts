'use strict';

import Axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import HttpClientInterface from './Contracts/HttpClientInterface';
import HttpClientResponse from './HttpClientResponse';
import { HttpClientFailureJudgeClosure, HttpConfig, LogHandler } from '../../Types/global';
import { buildXml } from '../Support/Utils';
import FormData from 'form-data';
import AxiosRetry from 'axios-retry';

class HttpClient implements HttpClientInterface
{
  /**
   * 日志处理方法
   */
  protected logger: LogHandler = null;

  constructor(
    protected axios: AxiosInstance,
    protected failureJudge: HttpClientFailureJudgeClosure = null,
    protected throwError: boolean = false
  ) {}

  setLogger(logger: LogHandler): this {
    this.logger = logger;
    return this;
  }

  judgeFailureUsing(closure: HttpClientFailureJudgeClosure): this {
    this.failureJudge = closure;
    return this;
  }

  async request(method: Method, url: string, payload: AxiosRequestConfig<any> = {}): Promise<HttpClientResponse> {
    let options: HttpConfig = { ...payload };
    if (!options.headers) options.headers = {};
    options.method = method;
    options.url = url;

    if (options['xml'] !== undefined) {
      let xml = '';
      if (typeof options['xml'] === 'object') {
        xml = buildXml(options['xml']);
      }
      else if (typeof options['xml'] === 'string') {
        xml = options['xml'];
      }
      else {
        throw new Error('The type of `xml` must be string or object.');
      }

      if (!options.headers['Content-Type'] && !options.headers['content-type']) {
        options.headers['content-type'] = 'text/xml';
      }

      options.data = xml;
      options['xml'] = undefined;
      delete options['xml'];
    }
    if (options['json'] !== undefined) {
      let json = '';
      if (typeof options['json'] === 'object') {
        json = JSON.stringify(options['json']);
      }
      else if (typeof options['json'] === 'string') {
        json = options['json'];
      }
      else {
        throw new Error('The type of `json` must be string or object.');
      }

      if (!options.headers['Content-Type'] && !options.headers['content-type']) {
        options.headers['content-type'] = 'application/json';
      }

      options.data = json;
      options['json'] = undefined;
      delete options['json'];
    }
    if (options['formData'] && Object.keys(options['formData']).length > 0) {
      let formData = new FormData();
      if (options['formData'] instanceof FormData) {
        formData = options['formData'];
      }
      else {
        for (let key in options['formData']) {
          formData.append(key, options['formData'][key]);
        }
      }
      if (options.data) for (let key in options.data) {
        formData.append(key, options.data[key]);
      }
      options.data = formData;
      options['formData'] = undefined;
      delete options['formData'];
    }

    // 如果 data 是 FormData 对象，则从中提取 headers
    if (options.data && options.data instanceof FormData) {
      options.headers = { ...(await this.getFormDataHeaders(options.data)), ...options.headers };
    }

    // 是否抛出异常
    options.validateStatus = (status) => {
      return this.throwError ? status >= 200 && status < 300 : true;
    };

    let starttime = Date.now();
    if (typeof this.logger === 'function') {
      await this.logger('before', options);
    }
    let response = await this.axios.request(options);
    if (typeof this.logger === 'function') {
      let usedTime = Date.now() - starttime;
      await this.logger('after', options, usedTime, response);
    }
    let resp = new HttpClientResponse(response, this.failureJudge, this.throwError);
    await resp.parseContent(this.throwError);
    return resp;
  }

  getInstance(): AxiosInstance {
    return this.axios;
  }

  setInstance(instance: AxiosInstance): this {
    this.axios = instance;
    return this;
  }

  /**
   * 获取 FormData 对象的 headers
   * @param formData
   * @returns
   */
  protected getFormDataHeaders(formData: FormData): Promise<Record<string, string | number>> {
    return new Promise((resolve, reject) => {
      let headers = formData.getHeaders();
      formData.getLength(function (err, length) {
        if (err) {
          headers['content-length'] = 0;
        }
        else {
          headers['content-length'] = length;
        }
        resolve(headers);
      });
    });
  }

  /**
   * 创建http客户端
   * @param config
   * @returns
   */
  static create(config: HttpConfig = null, failureJudge: HttpClientFailureJudgeClosure = null, throwError: boolean = false) {
    let axios = Axios.create(config);
    if (config && config.retry) {
      AxiosRetry(axios, config.retry);
    }
    return new HttpClient(axios, failureJudge, throwError);
  }
}

export = HttpClient;
