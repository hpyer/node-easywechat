'use strict';

import { Message } from './Message';

export class Article extends Message
{

  protected type: string = 'mpnews';
  protected properties: Array<string> = [
    'thumb_media_id',
    'author',
    'title',
    'content',
    'digest',
    'source_url',
    'show_cover',
  ];
  protected required: Array<string> = [
    'thumb_media_id',
    'title',
    'content',
    'show_cover',
  ];
  protected jsonAliases: object = {
    content_source_url: 'source_url',
    show_cover_pic: 'show_cover',
  };

};
