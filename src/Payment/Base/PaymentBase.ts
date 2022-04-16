'use strict';

import BaseClient from '../Core/BaseClient';

export default class PaymentBase extends BaseClient
{

  /**
   * 刷卡支付
   * @param params 支付订单参数
   */
  async pay(params: object): Promise<any>
  {
    params['appid'] = this.app.config.app_id;
    return await this.request(this.wrap('pay/micropay'), params);
  }

  /**
   * 付款码查询openid
   * @param auth_code 扫码支付付款码
   */
  async authCodeToOpenid(auth_code: string): Promise<any>
  {
    return await this.request('tools/authcodetoopenid', {
      appid: this.app.config.app_id,
      auth_code,
    });
  }

}
