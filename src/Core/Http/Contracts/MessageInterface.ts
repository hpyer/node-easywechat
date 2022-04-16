'use strict';

abstract class MessageInterface
{
  /**
   * 获取 HTTP 协议版本，如：'1.1', '1.0'
   * @returns
   */
  getProtocolVersion(): string { return null; }

  /**
   * 设置 HTTP 协议版本
   * @param version
   * @returns
   */
  withProtocolVersion(version: string): this { return this; }

  /**
   * 获取所有headers
   * @returns
   */
  getHeaders(): Record<string, any> { return null; }

  /**
   * 判断header是否存在
   * @param name
   * @returns
   */
  hasHeader(name: string): boolean { return false; }

  /**
   * 获取header
   * @param name
   * @returns
   */
  getHeader(name: string): any { return null; }

  /**
   * 获取header，逗号分隔同名header
   * @param name
   * @returns
   */
  getHeaderLine(name: string): string { return null; }

  /**
   * 设置header值
   * @param name
   * @param value
   * @returns
   */
  withHeader(name: string, value: string | string[]): this { return this; }

  /**
   * 附加header值
   * @param name
   * @param value
   * @returns
   */
  withAddedHeader(name: string, value: string | string[]): this { return this; }

  /**
   * 删除header
   * @param name
   * @returns
   */
  withoutHeader(name: string): this { return this; }

  /**
   * 获取body内容
   * @returns
   */
  getBody(): Buffer { return null; }

  /**
   * 设置body内容
   * @param body
   * @returns
   */
  withBody(body: any): this { return this; }

};

export = MessageInterface;
