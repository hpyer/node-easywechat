'use strict';

import ServerRequestInterface from "../Http/Contracts/ServerRequestInterface";

class ServerRequestMixin
{
  protected request: ServerRequestInterface;

  /**
   * 获取请求实例
   * @returns
   */
  getRequest(): ServerRequestInterface
  {
    return this.request;
  }

  /**
   * 设置请求实例
   * @param request
   * @returns
   */
  setRequest(request: ServerRequestInterface): this
  {
    this.request = request;

    return this;
  }

};

export = ServerRequestMixin;
