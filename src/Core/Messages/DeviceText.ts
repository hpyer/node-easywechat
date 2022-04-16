'use strict';

import { Message } from './Message';

export class DeviceText extends Message
{

  protected type: string = 'device_text';
  protected properties: Array<string> = [
    'device_type',
    'device_id',
    'content',
    'session_id',
    'open_id',
  ];

  toXmlArray(): object
  {
    return {
      DeviceType: this.get('device_type'),
      DeviceID: this.get('device_id'),
      SessionID: this.get('session_id'),
      Content: Buffer.from(this.get('content')).toString('base64'),
    };
  }

};
