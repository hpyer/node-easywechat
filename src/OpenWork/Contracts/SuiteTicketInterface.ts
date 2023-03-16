'use strict';

abstract class SuiteTicketInterface
{
  /**
   * 获取ticket缓存名
   * @returns
   */
  getKey(): string { return null; }

  /**
   * 设置ticket缓存名
   * @returns
   */
  setKey(key: string): this { return null; }

  /**
   * 设置ticket
   * @returns
   */
  setTicket(key: string): Promise<this> { return null; }

  /**
   * 获取ticket
   * @returns
   */
  getTicket(): Promise<string> { return null; }
};

export = SuiteTicketInterface;
