'use strict';

import ResponseInterface from "../Http/Contracts/ResponseInterface";

abstract class ServerInterface
{
  /**
   * 处理消息
   */
  async serve(): Promise<ResponseInterface> { return null; }
};

export = ServerInterface;
