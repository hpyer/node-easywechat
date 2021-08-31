'use strict';

import { merge, randomString } from '../../Core/Utils';
import BaseClient from '../Core/BaseClient';

export default class MicroMerchantBase extends BaseClient
{

  submitApplication(params: object): Promise<any>
  {
    let newParams = this.processParams(merge(merge({}, params), {
      version: '3.0',
      cert_sn: '',
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    }));
    return this.safeRequest('applyment/micro/submit', newParams);
  }

  getStatus(applymentId: string, businessCode: string = ''): Promise<any>
  {
    let params = {
      version: '1.0',
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    };
    if (applymentId) {
      params['applyment_id'] = applymentId;
    }
    else {
      params['business_code'] = businessCode;
    }

    return this.safeRequest('applyment/micro/getstate', params);
  }

  upgrade(params: object): Promise<any>
  {
    let newParams = this.processParams(merge(merge({}, params), {
      sub_mch_id: params['sub_mch_id'] || this.app.config.sub_mch_id,
      version: '1.0',
      cert_sn: '',
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    }));
    return this.safeRequest('applyment/micro/submitupgrade', newParams);
  }

  getUpgradeStatus(subMchId: string = ''): Promise<any>
  {
    let params = {
      sub_mch_id: subMchId || this.app.config.sub_mch_id,
      version: '1.0',
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    };

    return this.safeRequest('applyment/micro/getupgradestate', params);
  }

}
