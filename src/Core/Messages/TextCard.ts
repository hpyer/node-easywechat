'use strict';

import { Message } from './Message';

export class TextCard extends Message
{

  protected type: string = 'textcard';
  protected properties: Array<string> = [
    'title',
    'description',
    'url',
  ];

};
