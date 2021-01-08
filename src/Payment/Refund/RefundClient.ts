'use strict';

import { merge } from '../../Core/Utils';
import BaseClient from '../Core/BaseClient';

export default class RefundClient extends BaseClient
{

  /**
   * 根据商户订单号退款
   * @param number 商户订单号
   * @param refundNumber 商户退款订单号
   * @param totalFee 订单金额
   * @param refundFee 退款金额
   * @param optional 其它参数
   */
  byOutTradeNumber(number: string, refundNumber: string, totalFee: number, refundFee: number, optional: object = {}): Promise<any>
  {
    return this.refund(refundNumber, totalFee, refundFee, merge(merge({}, optional), {
      out_trade_no: number,
    }));
  }

  /**
   * 根据支付交易号退款
   * @param transactionId 支付交易号
   * @param refundNumber 商户退款订单号
   * @param totalFee 订单金额
   * @param refundFee 退款金额
   * @param optional 其它参数
   */
  byTransactionId(transactionId: string, refundNumber: string, totalFee: number, refundFee: number, optional: object = {}): Promise<any>
  {
    return this.refund(refundNumber, totalFee, refundFee, merge(merge({}, optional), {
      transaction_id: transactionId,
    }));
  }

  protected refund(refundNumber: string, totalFee: number, refundFee: number, optional: object = {}): Promise<any>
  {
    let params = merge({
      appid: this.app.config.app_id,
      out_refund_no: refundNumber,
      total_fee: totalFee,
      refund_fee: refundFee,
    }, optional);

    return this.safeRequest(this.wrap(
      this.app['inSandbox']() ? 'pay/refund' : 'secapi/pay/refund'
    ), params);
  }

  /**
   * 根据支付交易号查询退款
   * @param transactionId 支付交易号
   */
  queryByTransactionId(transactionId: string): Promise<any>
  {
    return this.query(transactionId, 'transaction_id');
  }

  /**
   * 根据商户订单号查询退款
   * @param outTradeNumber 商户订单号
   */
  queryByOutTradeNumber(outTradeNumber: string): Promise<any>
  {
    return this.query(outTradeNumber, 'out_trade_no');
  }

  /**
   * 根据商户退款订单号查询退款
   * @param outRefundNumber 商户退款订单号
   */
  queryByOutRefundNumber(outRefundNumber: string): Promise<any>
  {
    return this.query(outRefundNumber, 'out_refund_no');
  }

  /**
   * 根据退款交易号查询
   * @param refundId 退款交易号
   */
  queryByRefundId(refundId: string): Promise<any>
  {
    return this.query(refundId, 'refund_id');
  }

  protected query(number: string, type: string): Promise<any>
  {
    let params = {
      appid: this.app.config.app_id,
    };
    params[type] = number;

    return this.request(this.wrap('pay/refundquery'), params);
  }

}
