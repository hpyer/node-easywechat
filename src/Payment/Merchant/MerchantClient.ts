'use strict';

import { merge } from '../../Core/Utils';
import BaseClient from '../Core/BaseClient';

export default class MerchantClient extends BaseClient
{

  addSubMerchant(params: object): Promise<any>
  {
    return this.manage(params, {
      action: 'add',
    });
  }

  querySubMerchantByMerchantId(id: string): Promise<any>
  {
    let params = {
      micro_mch_id: id,
    };
    return this.manage(params, {
      action: 'query',
    });
  }

  querySubMerchantByWeChatId(id: string): Promise<any>
  {
    let params = {
      recipient_wechatid: id,
    };
    return this.manage(params, {
      action: 'query',
    });
  }

  protected manage(data: object, query: object): Promise<any>
  {
    let params = merge(merge({}, data), {
      appid: this.app.config.app_id,
      nonce_str: '',
      sub_mech_id: '',
      sub_appid: '',
    });

    return this.safeRequest('secapi/mch/submchmanage', params, 'post', {qs: query});
  }

}
