'use strict';

import BaseClient from '../Core/BaseClient';
import * as Merge from 'merge';

export default class Client extends BaseClient
{

  byOutTradeNumber(number: string, refundNumber: string, totalFee: number, refundFee: number, optional: object = {}): Promise<any>
  {
    return this.refund(refundNumber, totalFee, refundFee, Merge({}, optional, {
      out_trade_no: number,
    }));
  }

  byTransactionId(transactionId: string, refundNumber: string, totalFee: number, refundFee: number, optional: object = {}): Promise<any>
  {
    return this.refund(refundNumber, totalFee, refundFee, Merge({}, optional, {
      transaction_id: transactionId,
    }));
  }

  protected refund(refundNumber: string, totalFee: number, refundFee: number, optional: object = {}): Promise<any>
  {
    let params = Merge({
      appid: this.app['config'].app_id,
      out_refund_no: refundNumber,
      total_fee: totalFee,
      refund_fee: refundFee,
    }, optional);

    return this.safeRequest(this.wrap(
      this.app['inSandbox']() ? 'pay/refund' : 'secapi/pay/refund'
    ), params);
  }


  queryByTransactionId(transactionId: string): Promise<any>
  {
    return this.query(transactionId, 'transaction_id');
  }

  queryByOutTradeNumber(outTradeNumber: string): Promise<any>
  {
    return this.query(outTradeNumber, 'out_trade_no');
  }

  queryByOutRefundNumber(outRefundNumber: string): Promise<any>
  {
    return this.query(outRefundNumber, 'out_refund_no');
  }

  queryByRefundId(refundId: string): Promise<any>
  {
    return this.query(refundId, 'refund_id');
  }

  protected query(number: string, type: string): Promise<any>
  {
    let params = {
      appid: this.app['config'].app_id,
    };
    params[type] = number;

    return this.request(this.wrap('pay/refundquery'), params);
  }

}
