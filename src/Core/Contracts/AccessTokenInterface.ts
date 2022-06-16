'use strict';

abstract class AccessTokenInterface
{
  /**
   * 获取token
   * @returns
   */
  async getToken(): Promise<string> { return null; }

  /**
   * 转成url参数
   * @returns
   */
  async toQuery(): Promise<Record<string, any>> { return null; }
};

export = AccessTokenInterface;
