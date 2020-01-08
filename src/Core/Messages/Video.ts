'use strict';

import { Media } from './Media';

export class Video extends Media
{

  protected type: string = 'video';
  protected properties: Array<string> = [
    'title',
    'description',
    'media_id',
    'thumb_media_id',
  ];

  constructor(mediaId: string, attributes: object = {})
  {
    super(mediaId, 'video', attributes);
  }

  toXmlArray(): object
  {
    let music = {
      Music: {
        Title: this.get('title'),
        Description: this.get('description'),
        MusicUrl: this.get('url'),
        HQMusicUrl: this.get('hq_url'),
      }
    };
    let thumbMediaId = this.get('thumb_media_id');
    if (thumbMediaId) {
      music['Music']['ThumbMediaId'] = thumbMediaId;
    }

    return music;
  }

};
