'use strict';

abstract class AccountInterface
{
  /**
   * 获取corpid
   * @returns
   */
  getCorpId(): string { return null; }

  /**
   * 获取provider secret
   * @returns
   */
  getProviderSecret(): string { return null; }

  /**
   * 获取suite id
   * @returns
   */
  getSuiteId(): string { return null; }

  /**
   * 获取suite secret
   * @returns
   */
  getSuiteSecret(): string { return null; }

  /**
   * 获取token
   * @returns
   */
  getToken(): string { return null; }

  /**
   * 获取aesKey
   * @returns
   */
  getAesKey(): string { return null; }
};

export = AccountInterface;
