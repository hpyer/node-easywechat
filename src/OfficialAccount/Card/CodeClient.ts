'use strict';

import BaseClient from '../../Core/BaseClient';

export default class CodeClient extends BaseClient
{

  deposit(cardId: string, codes: Array<string>): Promise<any>
  {
    return this.httpPostJson('card/code/deposit', {
      card_id: cardId,
      code: codes,
    });
  }

  getDepositedCount(cardId: string): Promise<any>
  {
    return this.httpPostJson('card/code/getdepositcount', {
      card_id: cardId,
    });
  }

  check(cardId: string, codes: Array<string>): Promise<any>
  {
    return this.httpPostJson('card/code/checkcode', {
      card_id: cardId,
      code: codes,
    });
  }

  get(code: string, cardId: string, checkConsume: Boolean = true): Promise<any>
  {
    return this.httpPostJson('card/code/get', {
      code: code,
      check_consume: checkConsume,
      card_id: cardId,
    });
  }

  update(code: string, newCode: string, cardId: string): Promise<any>
  {
    return this.httpPostJson('card/code/update', {
      code: code,
      new_code: newCode,
      card_id: cardId,
    });
  }

  disable(code: string, cardId: string): Promise<any>
  {
    return this.httpPostJson('card/code/unavailable', {
      code: code,
      card_id: cardId,
    });
  }

  consume(code: string, cardId: string = null): Promise<any>
  {
    let params = {
      code: code,
    };
    if (cardId) {
      params['card_id'] = cardId;
    }
    return this.httpPostJson('card/code/consume', params);
  }

  decrypt(encryptedCode: string): Promise<any>
  {
    return this.httpPostJson('card/code/decrypt', {
      encrypt_code: encryptedCode,
    });
  }

}
