'use strict';

import BaseClient from '../Core/BaseClient';
import { getTimestamp } from '../../Core/Utils';

export default class OrderClient extends BaseClient
{

  /**
   * 统一下单
   * @param params 订单信息
   * @param isContract 是否支付中签约，默认 false
   */
  async unify(params: object, isContract: Boolean = false): Promise<any>
  {
    if (!params['spbill_create_ip']) {
      params['spbill_create_ip'] = 'NATIVE' === params['trade_type'] ? await this.getServerIp() : this.getClientIp();
    }

    params['appid'] = this.app.config.app_id;
    params['notify_url'] = this.app.config.notify_url;

    if (isContract) {
      params['contract_appid'] = this.app.config.app_id;
      params['contract_mchid'] = this.app.config.mch_id;
      params['request_serial'] = params['request_serial'] || getTimestamp();
      params['contract_notify_url'] = params['contract_notify_url'] || this.app.config.contract_notify_url;
    }

    return this.request(this.wrap('pay/contractorder'), params);
  }

  /**
   * 根据商户订单号查询
   * @param out_trade_no 商户订单号
   */
  queryByOutTradeNumber(out_trade_no: string): Promise<any>
  {
    let params = {
      out_trade_no,
    };
    return this.query(params);
  }

  /**
   * 根据交易号查询
   * @param transaction_id 交易号
   */
  queryByTransactionId(transaction_id: string): Promise<any>
  {
    let params = {
      transaction_id,
    };
    return this.query(params);
  }

  protected query(params: object): Promise<any>
  {
    params['appid'] = this.app.config.app_id;

    return this.request(this.wrap('pay/orderquery'), params);
  }

  /**
   * 关闭订单
   * @param tradeNo 商户订单号
   */
  close(tradeNo: string): Promise<any>
  {
    let params = {
      appid: this.app.config.app_id,
      out_trade_no: tradeNo,
    };

    return this.request(this.wrap('pay/closeorder'), params);
  }

}
