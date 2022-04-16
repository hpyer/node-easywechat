'use strict';

import { Message } from './Message';

export class Markdown extends Message
{

  protected type: string = 'markdown';
  protected properties: Array<string> = [
    'content',
  ];

};
