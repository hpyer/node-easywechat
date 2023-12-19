'use strict';

import RequestInterface from "./RequestInterface";

abstract class ServerRequestInterface extends RequestInterface
{
  /**
   * 获取所有服务端参数
   * @returns
   */
  getServerParams(): Record<string, any> { return null; }

  /**
   * 获取所有cookie参数
   * @returns
   */
  getCookieParams(): Record<string, any> { return null; }

  /**
   * 设置cookie参数
   * @param cookies
   * @returns
   */
  withCookieParams(cookies: Record<string, any>): this { return this; }

  /**
   * 获取所有get参数
   * @returns
   */
  getQueryParams(): Record<string, any> { return null; }

  /**
   * 设置get参数
   * @param query
   * @returns
   */
  withQueryParams(query: Record<string, any>): this { return this; }

  /**
   * 获取所有上传文件
   * @returns
   */
  getUploadedFiles(): Record<string, any> { return null; }

  /**
   * 设置上传文件
   * @param files
   * @returns
   */
  withUploadedFiles(files: Record<string, any>): this { return this; }

  /**
   * 获取所有post参数
   * @returns
   */
  getParsedBody(): Promise<Record<string, any>> { return null; }

  /**
   * 设置post参数
   * @param data
   * @returns
   */
  withParsedBody(data: Record<string, any>): this { return this; }

  /**
   * 获取所有属性
   * @returns
   */
  getAttributes(): Record<string, any> { return null; }

  /**
   * 获取单个属性
   * @param name
   * @param defaultValue
   * @returns
   */
  getAttribute(name: string, defaultValue: any = null): any { return null; }

  /**
   * 设置属性值
   * @param name
   * @param value
   * @returns
   */
  withAttribute(name: string, value: any): this { return this; }

  /**
   * 删除属性
   * @param name
   * @returns
   */
  withoutAttribute(name: string): this { return this; }

};

export = ServerRequestInterface;
