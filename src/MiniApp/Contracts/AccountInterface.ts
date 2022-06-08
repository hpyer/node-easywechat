'use strict';

abstract class AccountInterface
{
  /**
   * 获取appid
   * @returns
   */
  getAppId(): string { return null; }

  /**
   * 获取secret
   * @returns
   */
  getSecret(): string { return null; }

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
