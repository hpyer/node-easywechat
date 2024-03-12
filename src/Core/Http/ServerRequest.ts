'use strict';

import { IncomingMessage } from "http";
import merge from "merge";
import rawbody from "raw-body";
import { parse } from "url";
import { applyMixins, parseQueryString, parseXml } from "../Support/Utils";
import ServerRequestInterface from "./Contracts/ServerRequestInterface";
import MessageMixin from "./Minxins/MessageMixin";
import RequestMixin from "./Minxins/RequestMixin";

/**
 * 服务器收到的请求对象
 */
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
      this.withBody(body);
    }
  }

  /**
   * 解析 body 内容
   * 支持 JSON字符串、XML字符串、QueryString等格式
   */
  protected async parseBody() {
    let body = this.content.toString();
    if (body.startsWith('<xml')) {
      let res = await parseXml(body);
      this.parsedBody = res;
      this.headers['content-type'] = 'text/xml';
    }
    else if (body.startsWith('{') || body.startsWith('[')) {
      try {
        this.parsedBody = JSON.parse(body);
        this.headers['content-type'] = 'application/json';
      }
      catch (e) {
        this.parsedBody = {};
      }
    }
    else {
      try {
        this.parsedBody = parseQueryString(body);
        this.headers['content-type'] = 'application/x-www-form-urlencoded';
      }
      catch (e) {
        this.parsedBody = {};
      }
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
  async getParsedBody(): Promise<Record<string, any>> {
    if (!this.parsedBody || Object.keys(this.parsedBody).length === 0) {
      await this.parseBody();
    }
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
  static async createFromIncomingMessage(req: IncomingMessage, body: Buffer | Record<string, any> | string = null): Promise<ServerRequest> {
    let request = new ServerRequest(req.method, req.url, req.headers || {}, body, req.httpVersion);

    if (req.method.toUpperCase() === 'POST' && !body) {
      let res = await rawbody(req);
      request.withBody(res);
    }

    return request;
  }

};

interface ServerRequest extends MessageMixin, RequestMixin { };

applyMixins(ServerRequest, [MessageMixin, RequestMixin]);

export = ServerRequest;
