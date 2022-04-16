'use strict';

import { Message } from './Message';

export class DeviceEvent extends Message
{

  protected type: string = 'device_event';
  protected properties: Array<string> = [
    'device_type',
    'device_id',
    'content',
    'session_id',
    'open_id',
  ];

};
