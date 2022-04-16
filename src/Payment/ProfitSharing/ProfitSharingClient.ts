'use strict';

import BaseClient from '../Core/BaseClient';

export default class ProfitSharingClient extends BaseClient
{

  protected prepends(): object
  {
    return {
      sign_type: 'HMAC-SHA256',
    };
  }

  addReceiver(receiver: object): Promise<any>
  {
    let params = {
      appid: this.app.config.app_id,
      receiver: JSON.stringify(receiver),
    };

    return this.request('pay/profitsharingaddreceiver', params);
  }

  deleteReceiver(receiver: object): Promise<any>
  {
    let params = {
      appid: this.app.config.app_id,
      receiver: JSON.stringify(receiver),
    };

    return this.request('pay/profitsharingremovereceiver', params);
  }

  share(transactionId: string, outOrderNo: string, receivers: Array<object>): Promise<any>
  {
    let params = {
      appid: this.app.config.app_id,
      transaction_id: transactionId,
      out_order_no: outOrderNo,
      receivers: JSON.stringify(receivers),
    };

    return this.safeRequest('secapi/pay/profitsharing', params);
  }

  multiShare(transactionId: string, outOrderNo: string, receivers: Array<object>): Promise<any>
  {
    let params = {
      appid: this.app.config.app_id,
      transaction_id: transactionId,
      out_order_no: outOrderNo,
      receivers: JSON.stringify(receivers),
    };

    return this.safeRequest('secapi/pay/multiprofitsharing', params);
  }

  markOrderAsFinished(params: object): Promise<any>
  {
    params['appid'] = this.app.config.app_id;
    params['sub_appid'] = null;

    return this.safeRequest('secapi/pay/profitsharingfinish', params);
  }

  query(transactionId: string, outOrderNo: string): Promise<any>
  {
    let params = {
      sub_appid: null,
      transaction_id: transactionId,
      out_order_no: outOrderNo,
    };

    return this.request('pay/profitsharingquery', params);
  }

}
