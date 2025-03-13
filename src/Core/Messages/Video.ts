'use strict';

import { Media } from './Media';

export class Video extends Media
{

  protected type: string = 'video';
  protected properties: Array<string> = [
    'title',
    'description',
    'media_id',
  ];

  constructor(mediaId: string, attributes: object = {})
  {
    super(mediaId, 'video', attributes);
  }

  toXmlArray(): object
  {
    let video = {
      Video: {
        MediaId: this.get('media_id'),
        Title: this.get('title'),
        Description: this.get('description'),
      }
    };

    return video;
  }

};
