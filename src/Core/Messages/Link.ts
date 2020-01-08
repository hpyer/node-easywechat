'use strict';

import { Message } from './Message';

export class Link extends Message
{

  protected type: string = 'link';
  protected properties: Array<string> = [
    'title',
    'description',
    'url',
  ];

};
