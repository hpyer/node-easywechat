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

  /**
   * 更新任务卡片消息
   * @see https://open.work.weixin.qq.com/api/doc/90000/90135/91579
   * @param data
   * @returns
   */
  updateTaskcard(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/update_taskcard', data);
  }

  /**
   * 更新模版卡片消息
   * @see https://developer.work.weixin.qq.com/document/path/94888
   * @param data
   * @returns
   */
  updateTemplateCard(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/message/update_template_card', data);
  }

}
