'use strict';

import { Message } from './Message';

export class Location extends Message
{

  protected type: string = 'location';
  protected properties: Array<string> = [
    'latitude',
    'longitude',
    'scale',
    'label',
    'precision',
  ];

};
