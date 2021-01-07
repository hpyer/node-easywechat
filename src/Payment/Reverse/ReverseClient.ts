'use strict';

import BaseClient from '../Core/BaseClient';

export default class ReverseClient extends BaseClient
{

  /**
   * 通过商户订单号撤销订单
   * @param outTradeNumber 商户订单号
   */
  byOutTradeNumber(outTradeNumber: string): Promise<any>
  {
    return this.reverse(outTradeNumber, 'out_trade_no');
  }

  /**
   * 通过支付交易号撤销订单
   * @param transactionId 支付交易号
   */
  byTransactionId(transactionId: string): Promise<any>
  {
    return this.reverse(transactionId, 'transaction_id');
  }

  protected reverse(number: string, type: string): Promise<any>
  {
    let params = {
      appid: this.app.config.app_id,
    };
    params[type] = number;

    return this.safeRequest(this.wrap('secapi/pay/reverse'), params);
  }

}
