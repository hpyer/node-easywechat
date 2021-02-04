'use strict';

import { Message } from '.';

export class NewsItem extends Message
{
  protected type: string = 'news';

  protected properties: Array<string> = ['title', 'description', 'url', 'image',];

  toJsonArray(): object
  {
    return {
      title: this.get('title'),
      description: this.get('description'),
      url: this.get('url'),
      picurl: this.get('image'),
    };
  }

}
