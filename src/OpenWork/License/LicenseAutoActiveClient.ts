'use strict';

import BaseClient from '../../Core/BaseClient';

export default class LicenseAutoActiveClient extends BaseClient
{

  constructor(app)
  {
    super(app, app['provider_access_token']);
  }

  /**
   * 设置企业的许可自动激活状态
   * @see https://developer.work.weixin.qq.com/document/path/95873
   * @param corpId 企业corpid，要求服务商为企业购买过接口许可，购买指支付完成，购买并退款成功包括在内
   * @param status 许可自动激活状态。0：关闭，1：打开
   * @returns
   */
  setStatus(corpId: string, status: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/set_auto_active_status', {
      corpid: corpId,
      auto_active_status: status,
    });
  }

  /**
   * 查询企业的许可自动激活状态
   * @see https://developer.work.weixin.qq.com/document/path/95874
   * @param corpId 查询的企业corpid。要求服务商为企业购买过接口许可才有查询结果。
   * @returns
   */
  getStatus(corpId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/get_auto_active_status', {
      corpid: corpId,
    });
  }

}
