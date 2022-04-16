'use strict';

import HttpClientInterface from "../Contracts/HttpClientInterface";
import { AxiosRequestConfig } from 'axios';
import HttpClientResponse from "../HttpClientResponse";

class HttpClientMethodsMixin extends HttpClientInterface
{
  /**
   * 发送get请求
   * @param url
   * @param payload
   * @returns
   */
  async get(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('get', url, payload);
  }
  /**
   * 发送post请求
   * @param url
   * @param payload
   * @returns
   */
  async post(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('post', url, payload);
  }
  /**
   * 发送post请求（JSON数据）
   * @param url
   * @param payload
   * @returns
   */
  async postJson(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    if (!payload) payload = {};
    if (!payload['headers']) payload['headers'] = {};
    payload['headers']['Content-Type'] = 'application/json';
    return this.request('post', url, payload);
  }
  /**
   * 发送patch请求
   * @param url
   * @param payload
   * @returns
   */
  async patch(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('patch', url, payload);
  }
  /**
   * 发送put请求
   * @param url
   * @param payload
   * @returns
   */
  async put(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('put', url, payload);
  }
  /**
   * 发送delete请求
   * @param url
   * @param payload
   * @returns
   */
  async delete(url: string, payload: AxiosRequestConfig = {}): Promise<HttpClientResponse> {
    return this.request('delete', url, payload);
  }
}

export = HttpClientMethodsMixin;
