'use strict';

import { Message, Text, Raw as RawMessage } from "../../Core/Messages";
import CustomerServiceClient from "./CustomerServiceClient";
import { isString } from "../../Core/Utils";

export default class Messenger
{
  protected _message: Message = null;

  protected _to: string;

  protected account: string;

  protected client: CustomerServiceClient;

  constructor(client: CustomerServiceClient)
  {
    this.client = client;
  }

  message(message: any): this
  {
    if (isString(message)) {
      message = new Text(message);
    }
    this._message = message;
    return this;
  }

  by(account: string): this
  {
    this.account = account;
    return this;
  }

  from(account: string): this
  {
    return this.by(account);
  }

  to(openid: string): this
  {
    this._to = openid;
    return this;
  }

  send(): Promise<any>
  {
    if (!this._message) {
      throw new Error('No message to send.');
    }

    let message: any = null;
    if (this._message instanceof RawMessage) {
      message = JSON.parse(this._message.get('content'));
    }
    else {
      let prepends = {
        touser: this._to,
      };
      if (this.account) {
        prepends['customservice'] = {
          kf_account: this.account,
        }
      }
      message = this._message.transformForJsonRequest(prepends);
    }

    return this.client['send'](message);
  }

  getAccount(): string
  {
    return this.account;
  }

  getTo(): string
  {
    return this._to;
  }

  getMessage(): Message
  {
    return this._message;
  }

  getClient(): CustomerServiceClient
  {
    return this.client;
  }

}
