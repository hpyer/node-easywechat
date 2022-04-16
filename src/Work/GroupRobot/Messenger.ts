'use strict';

import { Message, Text } from "./Messages";
import MessageClient from "./GroupRobotClient";

export default class Messenger
{
  protected message: Message = null;

  protected client: MessageClient = null;

  groupKey: string = null;

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

  toGroup(groupKey: string): this
  {
    this.groupKey = groupKey;

    return this;
  }

  send(message: Message = null): Promise<any>
  {
    if (message) {
      this.setMessage(message);
    }
    if (!this.message) {
      throw new Error('No message to send.');
    }
    if (!this.groupKey) {
      throw new Error('No group key specified.');
    }

    let data: object = this.message.transformForJsonRequest();

    return this.client.send(this.groupKey, data);
  }

}
