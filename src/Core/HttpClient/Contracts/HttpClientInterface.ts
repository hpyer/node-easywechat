'use strict';

import { Method, AxiosRequestConfig, AxiosInstance } from 'axios';
import { HttpClientFailureJudgeClosure, LogHandler } from '../../../Types/global';
import HttpClientResponse from '../HttpClientResponse';

abstract class HttpClientInterface
{

  /**
   * 获取axios实例
   * @returns
   */
  getInstance(): AxiosInstance { return null; }

  /**
   * 设置axios实例
   */
  setInstance(instance: AxiosInstance): this { return this; }

  /**
   * 设置日志方法
   */
  setLogger(logger: LogHandler): this { return this; }

  /**
   * 设置错误判断方法
   * @param closure
   * @returns
   */
  judgeFailureUsing(closure: HttpClientFailureJudgeClosure): this { return this; }

  /**
   * 发起http请求
   */
  async request(method: Method, url: string, payload: AxiosRequestConfig): Promise<HttpClientResponse> { return null; }
};

export = HttpClientInterface;
