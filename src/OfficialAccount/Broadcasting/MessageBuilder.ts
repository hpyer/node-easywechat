'use strict';

import { Message } from '../../Core/Messages';
import { merge } from '../../Core/Utils';

export default class MessageBuilder
{

  protected _to: object = {};
  protected _message: Message = null;
  protected _attributes: object = {};

  message(message: Message): MessageBuilder
  {
    this._message = message;
    return this;
  }

  to(to: object): MessageBuilder
  {
    this._to = to;
    return this;
  }

  toTag(tagId: number): MessageBuilder
  {
    this.to({
      filter: {
        is_to_all: false,
        tag_id: tagId,
      }
    });
    return this;
  }

  toUsers(openids: Array<string>): MessageBuilder
  {
    this.to({
      touser: openids
    });
    return this;
  }

  toAll(): MessageBuilder
  {
    this.to({
      filter: {
        is_to_all: true,
      }
    });
    return this;
  }

  with(attributes: object): MessageBuilder
  {
    this._attributes = attributes;
    return this;
  }

  build(prepends: object = null): object
  {
    if (!this._message) {
      throw new Error('No message content to send.');
    }

    let content = this._message.transformForJsonRequest();

    if (!prepends) {
      prepends = this._to;
    }

    let message = merge(merge(prepends, content), this._attributes);

    return message;
  }

  buildForPreview(by: string, user: string): object
  {
    let prepends = {};
    prepends[by] = user;

    return this.build(prepends);
  }

};
