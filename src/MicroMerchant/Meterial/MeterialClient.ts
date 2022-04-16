'use strict';

import { merge, randomString } from '../../Core/Utils';
import BaseClient from '../Core/BaseClient';

export default class MeterialClient extends BaseClient
{

  setSettlementCard(params: object): Promise<any>
  {
    let newParams = this.processParams(merge(merge({}, params), {
      sub_mch_id: params['sub_mch_id'] || this.app.config.sub_mch_id,
      version: '1.0',
      cert_sn: '',
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    }));
    return this.safeRequest('applyment/micro/modifyarchives', newParams);
  }

  updateContact(params: object): Promise<any>
  {
    let newParams = this.processParams(merge(merge({}, params), {
      sub_mch_id: params['sub_mch_id'] || this.app.config.sub_mch_id,
      version: '1.0',
      cert_sn: '',
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    }));
    return this.safeRequest('applyment/micro/modifycontactinfo', newParams);
  }

}
