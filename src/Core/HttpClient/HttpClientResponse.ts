'use strict';

import fs from "fs";
import merge from "merge";
import { AxiosResponse } from "axios";
import { HttpClientFailureJudgeClosure, WeixinResponse } from "../../Types/global";
import HttpClientResponseInterface from "./Contracts/HttpClientResponseInterface";
import { parseQueryString, parseXml } from "../Support/Utils";

class HttpClientResponse implements HttpClientResponseInterface {
  protected parsedContent: Record<string, any> = null;
  constructor(
    protected response: AxiosResponse,
    protected failureJudge: HttpClientFailureJudgeClosure = null,
    protected throwError: boolean = false
  ) {}

  /**
   * 设置解析后的body内容
   * @param content
   * @returns
   */
  setParsedContent(content: Record<string, any>): this {
    this.parsedContent = content;
    return this;
  }

  /**
   * 解析body内容
   * @param throwError
   * @returns
   */
  async parseContent(throwError: boolean = false) {
    throwError = throwError ?? this.throwError;

    let content = this.response.data;
    if (!content) {
      if (throwError) {
        throw new Error('Response body is empty.');
      }
      return;
    }
    if (typeof content === 'string') {
      if (this.is('xml') && content.indexOf('<xml>') > -1) {
        this.parsedContent = await parseXml(content);
      }
      else if (this.is('json')) {
        try {
          this.parsedContent = JSON.parse(content);
        }
        catch (e) {
          if (throwError) {
            throw new Error('Fail to parse JSON content.');
          }
        }
      }
      else if (this.is('text')) {
        try {
          this.parsedContent = parseQueryString(content);
        }
        catch (e) {
          if (throwError) {
            throw new Error('Fail to parse QueryString content.');
          }
        }
      }
    }
    else if (!Buffer.isBuffer(content)) {
      this.parsedContent = content;
    }
  }

  withThrowError(throwError: boolean): this {
    this.throwError = throwError;
    return this;
  }
  throwOnFailure(): this {
    return this.withThrowError(true);
  }
  quietly(): this {
    return this.withThrowError(false);
  }
  /**
   * 设置错误判断方法
   * @param closure
   * @returns
   */
  judgeFailureUsing(closure: HttpClientFailureJudgeClosure): this {
    this.failureJudge = closure;
    return this;
  }
  /**
   * 获取请求是否失败
   * @returns
   */
  isFailed(): boolean {
    if (this.is('text') && this.failureJudge) {
      return this.failureJudge(this);
    }

    try {
      return 400 <= this.getStatusCode();
    }
    catch (e) {
      return true;
    }
  }
  /**
   * 获取请求是否成功
   * @returns
   */
  isSuccessful(): boolean {
    return !this.isFailed();
  }
  /**
   * 返回对象格式
   * @returns
   */
  toObject<T = WeixinResponse>(): T {
    return this.parsedContent as T;
  }

  /**
   * 返回json字符串
   * @returns
   */
  toJson(): string {
    return JSON.stringify(this.toObject());
  }

  /**
   * 返回字符串
   * @returns
   */
  toString(): string {
    let obj = this.getContent();
    return (typeof obj === 'object' && obj !== null) ? JSON.stringify(obj) : String(obj);
  }

  /**
   * 另存为文件
   * @param filename 完整的文件名（含路径）
   * @returns
   */
  saveAs(filename: string): string {
    let buffer = this.response.data;
    let content = buffer.toString();

    if (!content || '{' === content[0]) {
      throw new Error('Invalid media response content.');
    }

    fs.writeFileSync(filename, buffer);

    return filename;
  }

  /**
   * 返回base64字符串
   * @returns
   */
  toDataUrl(): string {
    return 'data:' + this.getHeader('content-type') + ';base64,' + this.response.data.toString('base64');
  }

  /**
   * 判断 content-type 是否指定类型
   * @param type
   * @returns
   */
  is(type: 'json' | 'xml' | 'html' | 'image' | 'audio' | 'video' | 'text'): boolean {
    let contentType = this.getHeader('content-type');
    if (!contentType) return false;
    let res = false;
    switch (type.toLowerCase()) {
      case 'json':
        res = contentType.indexOf('/json') > -1; break;
      case 'xml':
        res = contentType.indexOf('/xml') > -1; break;
      case 'html':
        res = contentType.indexOf('/html') > -1; break;
      case 'image':
        res = contentType.indexOf('image/') > -1; break;
      case 'audio':
        res = contentType.indexOf('audio/') > -1; break;
      case 'video':
        res = contentType.indexOf('video/') > -1; break;
      case 'text':
        res = contentType.indexOf('text/') > -1
            ||contentType.indexOf('/json') > -1
            ||contentType.indexOf('/xml') > -1; break;
    }
    return res;
  }

  /**
   * 判断header是否存在
   * @param key
   * @returns
   */
  hasHeader(key: string): any {
    return Object.keys(this.getHeaders()).findIndex(o => o === key) > -1;
  }
  /**
   * 获取单个header
   * @param key
   * @returns
   */
  getHeader(key: string): any {
    return this.getHeaders()[key] || null;
  }

  getStatusCode(): number {
    return this.response.status;
  }
  getHeaders(throwError?: boolean): Record<string, any> {
    let headers = merge.recursive(true, this.response.headers);
    for (let key in this.response.headers) {
      if (key !== key.toLowerCase()) {
        this.response.headers[key.toLowerCase()] = this.response.headers[key];
      }
    }
    return headers;
  }
  getContent(throwError?: boolean): any {
    return this.response.data;
  }
  cancel(): void {
  }
  getInfo(type?: string) {
    return this.response.config;
  }

  async offsetExists(key: any): Promise<boolean> {
    return Object.keys(await this.toObject()).findIndex(o => o === key) > -1;
  }
  async offsetGet(key: any) {
    return (await this.toObject())[key] || null;
  }
}

export = HttpClientResponse;
