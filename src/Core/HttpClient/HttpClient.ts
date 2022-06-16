'use strict';

import merge from 'merge';
import Axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import HttpClientInterface from './Contracts/HttpClientInterface';
import HttpClientResponse from './HttpClientResponse';
import { HttpClientFailureJudgeClosure, LogHandler } from '../../Types/global';
import { buildXml } from '../Support/Utils';

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

  /**
   * 设置日志处理方法
   * @param logger
   */
  setLogger(logger: LogHandler): this {
    this.logger = logger;
    return this;
  }

  async request(method: Method, url: string, payload: AxiosRequestConfig<any> = {}): Promise<HttpClientResponse> {
    let options: AxiosRequestConfig = merge.recursive(true, payload);
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

      if (!options.headers) options.headers = {};
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

      if (!options.headers) options.headers = {};
      if (!options.headers['Content-Type'] && !options.headers['content-type']) {
        options.headers['content-type'] = 'application/json';
      }

      options.data = json;
      options['json'] = undefined;
      delete options['json'];
    }

    let starttime = Date.now();
    if (typeof this.logger === 'function') {
      await this.logger('before', options);
    }
    let response = await this.axios.request(options);
    if (typeof this.logger === 'function') {
      let usedTime = Date.now() - starttime;
      await this.logger('after', options, usedTime, response);
    }
    return new HttpClientResponse(response, this.failureJudge, this.throwError);
  }

  getInstance(): AxiosInstance {
    return this.axios;
  }

  setInstance(instance: AxiosInstance): this {
    this.axios = instance;
    return this;
  }

  /**
   * 创建http客户端
   * @param config
   * @returns
   */
  static create(config: AxiosRequestConfig = null, failureJudge: HttpClientFailureJudgeClosure = null, throwError: boolean = false) {
    return new HttpClient(Axios.create(config), failureJudge, throwError);
  }
}

export = HttpClient;
