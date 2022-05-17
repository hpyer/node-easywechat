'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class SecurityClient extends BaseClient
{

  /**
   * 获取接口列表
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/apply_api/get_privacy_interface.html
   */
  get(): Promise<any>
  {
    return this.httpGet('wxa/security/get_privacy_interface');
  }

  /**
   * 申请接口
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/apply_api/apply_privacy_interface.html
   * @param params
   */
  set(params: object): Promise<any>
  {
    return this.httpPostJson('wxa/security/apply_privacy_interface', params);
  }

}
