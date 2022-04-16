'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class ChatClient extends BaseClient
{

  get(chatId: string): Promise<any>
  {
    return this.httpGet('cgi-bin/appchat/get', {
      calendar: chatId,
    });
  }

  create(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/appchat/create', data);
  }

  update(chatId: string, data: object): Promise<any>
  {
    let params = merge({
      chatid: chatId,
    }, data);

    return this.httpPostJson('cgi-bin/appchat/update', params);
  }

  send(message: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/appchat/send', message);
  }

}
