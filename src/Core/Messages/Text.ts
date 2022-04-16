'use strict';

import { Message } from './Message';

export class Text extends Message
{

  protected type: string = 'text';
  protected properties: Array<string> = [
    'content',
  ];

  constructor(content: string)
  {
    super({ content });
  }

  toXmlArray(): object
  {
    return {
      Content: this.get('content')
    };
  }

};
