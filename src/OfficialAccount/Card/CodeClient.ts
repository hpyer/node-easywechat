'use strict';

import BaseClient from '../../Core/BaseClient';

export default class CodeClient extends BaseClient
{

  /**
   * 导入卡券code
   * @param cardId 卡券id
   * @param codes 卡券code列表，最多100个
   */
  deposit(cardId: string, codes: Array<string>): Promise<any>
  {
    return this.httpPostJson('card/code/deposit', {
      card_id: cardId,
      code: codes,
    });
  }

  /**
   * 查询导入的卡券code
   * @param cardId 卡券id
   */
  getDepositedCount(cardId: string): Promise<any>
  {
    return this.httpPostJson('card/code/getdepositcount', {
      card_id: cardId,
    });
  }

  /**
   * 核查卡券code
   * @param cardId 卡券id
   * @param codes 卡券code列表
   */
  check(cardId: string, codes: Array<string>): Promise<any>
  {
    return this.httpPostJson('card/code/checkcode', {
      card_id: cardId,
      code: codes,
    });
  }

  /**
   * 查询卡券Code
   * @param code 卡券code
   * @param cardId 卡券id
   * @param checkConsume 是否校验code核销状态，true和false
   */
  get(code: string, cardId: string, checkConsume: Boolean = true): Promise<any>
  {
    return this.httpPostJson('card/code/get', {
      code: code,
      check_consume: checkConsume,
      card_id: cardId,
    });
  }

  /**
   * 更改卡券Code
   * @param code 旧code
   * @param newCode 新code
   * @param cardId 卡券id
   */
  update(code: string, newCode: string, cardId: string): Promise<any>
  {
    return this.httpPostJson('card/code/update', {
      code: code,
      new_code: newCode,
      card_id: cardId,
    });
  }

  /**
   * 设置卡券失效
   * @param code 卡券code
   * @param cardId 卡券id
   */
  disable(code: string, cardId: string): Promise<any>
  {
    return this.httpPostJson('card/code/unavailable', {
      code: code,
      card_id: cardId,
    });
  }

  /**
   * 核销卡券Code
   * @param code 卡券code
   * @param cardId 卡券id，默认：null
   */
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

  /**
   * 解码卡券code
   * @param encryptedCode 密文
   */
  decrypt(encryptedCode: string): Promise<any>
  {
    return this.httpPostJson('card/code/decrypt', {
      encrypt_code: encryptedCode,
    });
  }

}
