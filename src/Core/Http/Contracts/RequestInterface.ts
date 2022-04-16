'use strict';

import MessageInterface from "./MessageInterface";

abstract class RequestInterface extends MessageInterface
{
  /**
   * 获取请求路径，默认返回：'/'
   * @returns
   */
  getRequestTarget(): string { return null; }

  /**
   * 设置请求路径
   * @param requestTarget
   * @returns
   */
  withRequestTarget(requestTarget: string): this { return this; }

  /**
   * 获取请求方式
   * @returns
   */
  getMethod(): string { return null; }

  /**
   * 设置请求方式
   * @param method
   * @returns
   */
  withMethod(method: string): this { return this; }

  /**
   * 获取请求地址
   * @returns
   */
  getUri(): string { return null; }

  /**
   * 设置请求地址
   * @param uri
   * @returns
   */
  withUri(uri: string): this { return this; }

};

export = RequestInterface;
