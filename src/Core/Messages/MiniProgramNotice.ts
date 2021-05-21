'use strict';

import { Message } from './Message';

export class MiniProgramNotice extends Message
{

  protected type: string = 'miniprogram_notice';
  protected properties: Array<string> = [
    'appid',
    'title',
  ];

};
