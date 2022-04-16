'use strict';

import { randomString } from '../../Core/Utils';
import BaseClient from '../Core/BaseClient';

export default class WithdrawClient extends BaseClient
{

  queryWithdrawalStatus(date: string, subMchId: string): Promise<any>
  {
    let params = {
      date,
      sub_mch_id: subMchId || this.app.config.sub_mch_id,
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    };
    return this.safeRequest('fund/queryautowithdrawbydate', params);
  }

  requestWithdraw(date: string, subMchId: string): Promise<any>
  {
    let params = {
      date,
      sub_mch_id: subMchId || this.app.config.sub_mch_id,
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    };
    return this.safeRequest('fund/reautowithdrawbydate', params);
  }

}
