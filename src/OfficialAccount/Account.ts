'use strict';

import AccountInterface from "./Contracts/AccountInterface";

class Account implements AccountInterface
{
  protected appId: string = null;
  protected secret: string = null;
  protected token: string = null;
  protected aesKey: string = null;

  constructor(appId: string, secret: string, token: string = null, aesKey: string = null)
  {
    this.appId = appId;
    this.secret = secret;
    this.token = token;
    this.aesKey = aesKey;
  }

  getAppId(): string {
    return this.appId;
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
