'use strict';

import HttpClientInterface from "../Contracts/HttpClientInterface";
import { AxiosRequestConfig } from 'axios';
import HttpClientResponse from "../HttpClientResponse";
import merge from 'merge';

class HttpClientMethodsMixin extends HttpClientInterface
{
  /**
   * 发送get请求
   * @param url 请求地址
   * @param payload axios配置项
   * @returns
   */
  async get(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('get', url, payload);
  }
  /**
   * 发送post请求
   * @param url 请求地址
   * @param payload axios配置项
   * @returns
   */
  async post(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('post', url, payload);
  }
  /**
   * 发送patch请求
   * @param url 请求地址
   * @param payload axios配置项
   * @returns
   */
  async patch(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('patch', url, payload);
  }
  /**
   * 发送put请求
   * @param url
   * @param payload axios配置项
   * @returns
   */
  async put(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('put', url, payload);
  }
  /**
   * 发送delete请求
   * @param url
   * @param payload axios配置项
   * @returns
   */
  async delete(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('delete', url, payload);
  }


  /**
   * 发送post请求（JSON数据）
   * @param url 请求地址
   * @param data JSON对象
   * @param payload axios配置项
   * @returns
   */
  async postJson(url: string, data: object, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    if (!payload) payload = {};
    if (!payload['headers']) payload['headers'] = {};
    payload['headers']['Content-Type'] = 'application/json';
    payload.json = merge.recursive({}, data);
    return this.request('post', url, payload);
  }

  /**
   * 发送patch请求（JSON数据）
   * @param url 请求地址
   * @param data JSON 对象
   * @param payload axios配置项
   * @returns
   */
  async patchJson(url: string, data: object, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    if (!payload) payload = {};
    if (!payload['headers']) payload['headers'] = {};
    payload['headers']['Content-Type'] = 'application/json';
    payload.json = merge.recursive({}, data);
    return this.request('patch', url, payload);
  }

  /**
   * 发送post请求（XML数据）
   * @param url 请求地址
   * @param data XML字符串 或 键值对
   * @param payload axios配置项
   * @returns
   */
  async postXml(url: string, data: string | Record<string, any>, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    if (!payload) payload = {};
    if (!payload['headers']) payload['headers'] = {};
    payload['headers']['Content-Type'] = 'text/xml';
    payload.xml = typeof data === 'object' ? merge.recursive({}, data) : data;
    return this.request('post', url, payload);
  }

}

export = HttpClientMethodsMixin;
