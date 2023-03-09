'use strict';

import AccountInterface from "./Contracts/AccountInterface";

class Account implements AccountInterface
{
  constructor(
    protected corpId: string,
    protected secret: string,
    protected token: string = null,
    protected aesKey: string = null
  ) {}

  getCorpId(): string {
    return this.corpId;
  }
  getSecret(): string {
    if (null === this.secret) {
      throw new Error("No secret configured.");
    }
    return this.secret;
  }
  getToken(): string {
    return this.token;
  }
  getAesKey(): string {
    return this.aesKey;
  }

}

export = Account;
