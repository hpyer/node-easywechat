'use strict';

import BaseClient from '../../Core/BaseClient';
import { Message } from '../../Core/Messages';
import Messenger from './Messenger';

export default class MessageClient extends BaseClient
{

  message(message: Message): Messenger
  {
    return (new Messenger(this)).setMessage(message);
  }

  send(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/send', data);
  }

}
