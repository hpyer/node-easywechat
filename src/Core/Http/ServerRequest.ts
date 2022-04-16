'use strict';

import { IncomingMessage } from "http";
import merge from "merge";
import rawbody from "raw-body";
import { parse } from "url";
import { applyMixins, parseQueryString, parseXml } from "../Support/Utils";
import ServerRequestInterface from "./Contracts/ServerRequestInterface";
import MessageMixin from "./Minxins/MessageMixin";
import RequestMixin from "./Minxins/RequestMixin";

class ServerRequest implements ServerRequestInterface
{
  protected attributes: Record<string, any> = {};
  protected cookieParams: Record<string, any> = {};
  protected parsedBody: Record<string, any> = {};
  protected queryParams: Record<string, any> = {};
  protected serverParams: Record<string, any> = {};
  protected uploadedFiles: Record<string, any> = {};

  constructor(method: string, url: string, headers: Record<string, any> = {}, body: Buffer | Record<string, any> | string = null, version: string = 'v1.1', serverParams: Record<string, any> = {})
  {
    this.serverParams = serverParams;

    this.withMethod(method)
    .withUri(url)
    .setHeaders(headers || {})
    .withProtocolVersion(version)
    .withQueryParams(parse(url, true).query || {});

    if (body) {
      this.parseBody(body);
    }
  }

  /**
   * 解析 body 内容
   * @param body 支持 Buffer、object对象、JSON字符串、XML字符串、QueryString等格式
   */
  protected parseBody(body: Buffer | Record<string, any> | string) {
    if (Buffer.isBuffer(body)) {
      this.content = Buffer.from('');
      this.content.copy(body);
    }
    else if (typeof body === 'object' && Object.keys(body).length > 0) {
      this.parsedBody = body;
      this.content = Buffer.from(JSON.stringify(body));
      this.headers['content-type'] = 'application/json';
    }
    else if (typeof body === 'string') {
      try {
        this.parsedBody = JSON.parse(body);
        this.headers['content-type'] = 'application/json';
      }
      catch (e) {
        if (body.substring(0, 1) === '<') {
          parseXml(body).then(res => {
            this.parsedBody = res;
            this.headers['content-type'] = 'text/xml';
          });
        }
        else {
          this.parsedBody = parseQueryString(body);
          this.headers['content-type'] = 'application/x-www-form-urlencoded';
        }
      }
      this.content = Buffer.from(body);
    }
  }

  getServerParams(): Record<string, any> {
    return this.serverParams;
  }
  getCookieParams(): Record<string, any> {
    return this.cookieParams;
  }
  withCookieParams(cookies: Record<string, any>): this {
    this.cookieParams = merge.recursive(true, cookies);
    return this;
  }
  getQueryParams(): Record<string, any> {
    return this.queryParams;
  }
  withQueryParams(query: Record<string, any>): this {
    this.queryParams = merge.recursive(true, query);
    return this;
  }
  getUploadedFiles(): Record<string, any> {
    return this.uploadedFiles;
  }
  withUploadedFiles(files: Record<string, any>): this {
    this.uploadedFiles = merge.recursive(true, files);
    return this;
  }
  getParsedBody(): Record<string, any> {
    return this.parsedBody;
  }
  withParsedBody(data: Record<string, any>): this {
    this.parsedBody = merge.recursive(true, data);
    return this;
  }
  getAttributes(): Record<string, any> {
    return this.attributes;
  }
  getAttribute(name: string, defaultValue: any = null) {
    if (this.attributes[name] === undefined) {
      return defaultValue;
    }
    return this.attributes[name];
  }
  withAttribute(name: string, value: any): this {
    this.attributes[name] = value;
    return this;
  }
  withoutAttribute(name: string): this {
    this.attributes[name] = undefined;
    delete this.attributes[name];
    return this;
  }

  /**
   * 通过 IncomingMessage 创建实例
   *
   * 由于 IncomingMessage 的 body 流的特殊性，某些框架（目前已知：fastify）
   * 可能会自动读取后挂载到上下文中，从而导致 node-easywechat 去尝试读取时报错。
   * 这时可以选择传入第二个参数，即 body 的内容
   *
   * @param req
   * @param body 支持 Buffer、object对象、JSON字符串、XML字符串、QueryString格式的 body 内容字符串
   * @returns
   */
  static createFromIncomingMessage(req: IncomingMessage, body: Buffer | Record<string, any> | string = null): ServerRequest {
    let request = new ServerRequest(req.method, req.url, req.headers || {}, body, req.httpVersion, parse(req.url, true).query || {});

    if (!body) {
      rawbody(req).then(res => {
        request.withBody(res);
      });
    }

    return request;
  }

};

interface ServerRequest extends MessageMixin, RequestMixin { };

applyMixins(ServerRequest, [MessageMixin, RequestMixin]);

export = ServerRequest;
