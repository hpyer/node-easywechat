'use strict';

import { Message } from './Message';

export class Text extends Message
{
  protected type: string = 'text';

  protected properties: Array<string> = ['content', 'mentioned_list', 'mentioned_mobile_list'];

  constructor(content: string, userIds: Array<string> = [], mobiles: Array<string> = [])
  {
    super({
      content,
      mentioned_list: userIds,
      mentioned_mobile_list: mobiles,
    });
  }

  mention(userIds: Array<string>): this
  {
    this.set('mentioned_list', userIds);

    return this;
  }

  mentionByMobile(mobile: Array<string>): this
  {
    this.set('mentioned_mobile_list', mobile);

    return this;
  }

}
