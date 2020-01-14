'use strict';

import BaseClient from '../Core/BaseClient';

export default class Client extends BaseClient
{

  byOutTradeNumber(outTradeNumber: string): Promise<any>
  {
    return this.reverse(outTradeNumber, 'out_trade_no');
  }

  byTransactionId(transactionId: string): Promise<any>
  {
    return this.reverse(transactionId, 'transaction_id');
  }

  protected reverse(number: string, type: string): Promise<any>
  {
    let params = {
      appid: this.app['config'].app_id,
    };
    params[type] = number;

    return this.safeRequestApi(this.wrap('secapi/pay/reverse'), params);
  }

}
