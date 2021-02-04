'use strict';

import BaseClient from '../../Core/BaseClient';
import { Message } from './Messages';
import Messenger from './Messenger';

export default class MessageClient extends BaseClient
{

  message(message: Message): Messenger
  {
    return (new Messenger(this)).setMessage(message);
  }

  send(key: string, data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/webhook/send', data, {
      key,
    });
  }

}
