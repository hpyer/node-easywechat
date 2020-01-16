'use strict';

import BaseClient from '../Core/BaseClient';
import * as Merge from 'merge';
import { isObject } from '../../Core/Utils';

export default class Client extends BaseClient
{

  info(mchBillno: any): Promise<any>
  {
    let params = isObject(mchBillno) ? mchBillno : {
      mch_billno: mchBillno
    };

    params = Merge({}, params, {
      appid: this.app['config'].app_id,
      bill_type: 'MCHT',
    });

    return this.safeRequest('mmpaymkttransfers/gethbinfo', params);
  }

  sendNormal(params: object): Promise<any>
  {
    params = Merge({}, params, {
      wxappid: this.app['config'].app_id,
      total_num: 1,
      client_ip: params['client_ip'] || this.getServerIp(),
    });

    return this.safeRequest('mmpaymkttransfers/sendredpack', params);
  }

  sendGroup(params: object): Promise<any>
  {
    params = Merge({}, params, {
      wxappid: this.app['config'].app_id,
      amt_type: 'ALL_RAND',
    });

    return this.safeRequest('mmpaymkttransfers/sendgroupredpack', params);
  }

}
