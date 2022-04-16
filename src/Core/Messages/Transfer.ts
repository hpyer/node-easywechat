'use strict';

import { Message } from './Message';

export class Transfer extends Message
{

  protected type: string = 'transfer_customer_service';
  protected properties: Array<string> = [
    'account',
  ];

  constructor(account: string)
  {
    super({ account });
  }

  toXmlArray(): object
  {
    return this.get('account') ? {
      TransInfo: {
        KfAccount: this.get('account')
      }
    } : {};
  }

};
