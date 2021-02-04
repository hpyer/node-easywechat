'use strict';

import { Message } from '.';

export class Image extends Message
{
  protected type: string = 'image';

  protected properties: Array<string> = ['base64', 'md5'];

  constructor(base64: string, md5: string)
  {
    super({
      base64,
      md5,
    });
  }

}
