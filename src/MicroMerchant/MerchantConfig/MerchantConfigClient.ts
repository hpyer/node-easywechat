'use strict';

import { randomString } from '../../Core/Utils';
import BaseClient from '../Core/BaseClient';

export default class MerchantConfigClient extends BaseClient
{

  setFollowConfig(subAppId: string, subscribeAppId: string, receiptAppId: string = '', subMchId: string = ''): Promise<any>
  {
    let params = {
      sub_appid: subAppId,
      sub_mch_id: subMchId || this.app.config.sub_mch_id,
      sign_type: 'HMAC-SHA256',
      nonce_str: randomString(18),
    };

    if (subscribeAppId) {
      params['subscribe_appid'] = subscribeAppId;
    }
    else {
      params['receipt_appid'] = receiptAppId;
    }

    return this.safeRequest('secapi/mkt/addrecommendconf', params);
  }

  addPath(jsapiPath: string, appId: string = '', subMchId: string = ''): Promise<any>
  {
    return this.addConfig({
      appid: appId || this.app.config.appid,
      sub_mch_id: subMchId || this.app.config.sub_mch_id,
      jsapi_path: jsapiPath,
    });
  }

  bindAppId(subAppId: string, appId: string = '', subMchId: string = ''): Promise<any>
  {
    return this.addConfig({
      appid: appId || this.app.config.appid,
      sub_mch_id: subMchId || this.app.config.sub_mch_id,
      sub_appid: subAppId,
    });
  }

  private addConfig(params: object): Promise<any>
  {
    return this.safeRequest('secapi/mch/addsubdevconfig', params);
  }

  getConfig(subMchId: string, appId: string): Promise<any>
  {
    let params = {
      sub_mch_id: subMchId || this.app.config.sub_mch_id,
      appid: appId || this.app.config.appid,
    };
    return this.safeRequest('secapi/mch/querysubdevconfig', params);
  }

}
