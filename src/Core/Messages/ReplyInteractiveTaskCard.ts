'use strict';

import { Message } from './Message';

/**
 * 专门为回复 InteractiveTaskCard 类型任务卡片消息而创建的类型
 */
export class ReplyInteractiveTaskCard extends Message
{

  protected type: string = 'update_taskcard';
  protected properties: Array<string> = [
    'replace_name',
  ];

  constructor(replace_name: string = '')
  {
    super({ replace_name });
  }

  toXmlArray(): object
  {
    return {
      TaskCard: {
        ReplaceName: this.get('replace_name'),
      },
    };
  }

};
