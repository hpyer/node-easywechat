'use strict';

import Client from './Client';

export default class GeneralCardClient extends Client
{

  activate(info: object): Promise<any>
  {
    return this.httpPostJson('card/generalcard/activate', info);
  }

  deactivate(cardId: string, code: string): Promise<any>
  {
    return this.httpPostJson('card/generalcard/unactivate', {
      card_id: cardId,
      code,
    });
  }

  updateUser(params: object): Promise<any>
  {
    return this.httpPostJson('card/generalcard/updateuser', params);
  }

}
