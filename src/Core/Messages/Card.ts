'use strict';

import { Message } from './Message';

export class Card extends Message
{

  protected type: string = 'wxcard';
  protected properties: Array<string> = [
    'card_id',
  ];

  constructor(cardId: string)
  {
    super({ card_id: cardId });
  }

};
