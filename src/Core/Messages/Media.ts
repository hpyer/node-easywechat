'use strict';

import { Message } from './Message';
import { merge, strStudly } from '../Utils';

export class Media extends Message
{

  protected properties: Array<string> = [
    'media_id',
  ];

  protected required: Array<string> = [
    'media_id',
  ];

  constructor(mediaId: string, type: string = '', attributes: object = {})
  {
    super(merge({ media_id: mediaId }, attributes));

    if (type) this.setType(type);
  }

  getMediaId(): string
  {
    this.checkRequiredAttributes();

    return this.get('media_id');
  }

  toXmlArray(): object
  {
    return {
      [strStudly(this.getType())]: {
        MediaId: this.get('media_id'),
      }
    };
  }

};
