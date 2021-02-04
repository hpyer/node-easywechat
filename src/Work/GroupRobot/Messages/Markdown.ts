'use strict';

import { Message } from '.';

export class Markdown extends Message
{
  protected type: string = 'markdown';

  protected properties: Array<string> = ['content'];

  constructor(content: string)
  {
    super({
      content,
    });
  }

}
