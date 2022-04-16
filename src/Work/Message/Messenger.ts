'use strict';

import { Message, Text } from "../../Core/Messages";
import { isArray, merge } from "../../Core/Utils";
import MessageClient from "./MessageClient";

export default class Messenger
{
  protected message: Message = null;

  protected client: MessageClient = null;

  to: object = {
    touser: '@all',
  }

  agentId: number = null;

  secretive: boolean = false;

  constructor(client: MessageClient)
  {
    this.client = client;
  }

  setMessage(message: Message): this
  {
    if (typeof message == 'string' || typeof message == 'number') {
      message = new Text(message as string);
    }

    if (!(message instanceof Message)) {
      throw new Error('Invalid message.');
    }

    this.message = message;

    return this;
  }

  ofAgent(agentId: number): this
  {
    this.agentId = agentId;

    return this;
  }

  setSecretive(): this
  {
    this.secretive = true;

    return this;
  }

  protected setRecipients(ids: Array<string> | string, key: string): this
  {
    if (isArray(ids)) {
      ids = (ids as Array<string>).join('|');
    }

    this.to = {};
    this.to[key] = ids;

    return this;
  }

  toUser(userIds: Array<string> | string): this
  {
    return this.setRecipients(userIds, 'touser');
  }

  toParty(partyIds: Array<string> | string): this
  {
    return this.setRecipients(partyIds, 'toparty');
  }

  toTag(tagIds: Array<string> | string): this
  {
    return this.setRecipients(tagIds, 'totag');
  }

  send(message: Message = null): Promise<any>
  {
    if (message) {
      this.setMessage(message);
    }
    if (!this.message) {
      throw new Error('No message to send.');
    }
    if (!this.agentId) {
      throw new Error('No agentid specified.');
    }

    let data: object = this.message.transformForJsonRequest(merge({
      agentid: this.agentId,
      safe: this.secretive ? 1 : 0,
    }, this.to));

    this.secretive = false;

    return this.client.send(data);
  }

}
