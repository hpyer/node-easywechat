'use strict';

import BaseClient from '../Core/BaseClient';
import { getTimestamp } from '../../Core/Utils';

export default class Client extends BaseClient
{

  unify(params: object, isContract: Boolean = false): Promise<any>
  {
    if (!params['spbill_create_ip']) {
      params['spbill_create_ip'] = 'NATIVE' === params['trade_type'] ? this.getServerIp() : this.getClientIp();
    }

    params['appid'] = this.app['config'].app_id;
    params['notify_url'] = this.app['config'].app_id;

    if (isContract) {
      params['contract_appid'] = this.app['config'].app_id;
      params['contract_mchid'] = this.app['config'].mch_id;
      params['request_serial'] = params['request_serial'] || getTimestamp();
      params['contract_notify_url'] = params['contract_notify_url'] || this.app['config'].contract_notify_url;
    }

    return this.requestApi(this.wrap('pay/contractorder'), params);
  }

  queryByOutTradeNumber(out_trade_no: string): Promise<any>
  {
    let params = {
      out_trade_no,
    };
    return this.query(params);
  }

  queryByTransactionId(transaction_id: string): Promise<any>
  {
    let params = {
      transaction_id,
    };
    return this.query(params);
  }

  protected query(params: object): Promise<any>
  {
    params['appid'] = this.app['config'].app_id;

    return this.requestApi(this.wrap('pay/orderquery'), params);
  }

  close(tradeNo: string): Promise<any>
  {
    let params = {
      appid: this.app['config'].app_id,
      out_trade_no: tradeNo,
    };

    return this.requestApi(this.wrap('pay/closeorder'), params);
  }

}
