'use strict';

import AccountInterface from "./Contracts/AccountInterface";

class Account implements AccountInterface
{
  constructor(
    protected corpId: string,
    protected providerSecret: string,
    protected suiteId: string,
    protected suiteSecret: string,
    protected token: string = null,
    protected aesKey: string = null
  ) { }

  getCorpId(): string {
    return this.corpId;
  }
  getProviderSecret(): string {
    return this.providerSecret;
  }
  getSuiteId(): string {
    return this.suiteId;
  }
  getSuiteSecret(): string {
    return this.suiteSecret;
  }
  getToken(): string {
    return this.token;
  }
  getAesKey(): string {
    return this.aesKey;
  }

}

export = Account;
