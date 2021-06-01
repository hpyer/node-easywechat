'use strict';

import { Message } from './Message';

/**
 * 企业微信 interactive_taskcard 任务卡片消息类型
 */
export class InteractiveTaskCard extends Message
{

  protected type: string = 'interactive_taskcard';
  protected properties: Array<string> = [
    'title',
    'description',
    'url',
    'task_id',
    'btn',
  ];

};
