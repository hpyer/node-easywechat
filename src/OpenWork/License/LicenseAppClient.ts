'use strict';

import BaseClient from '../../Core/BaseClient';

export default class LicenseAppClient extends BaseClient
{

  constructor(app)
  {
    super(app, app['provider_access_token']);
  }

  /**
   * 获取应用的接口许可状态
   * @see https://developer.work.weixin.qq.com/document/path/95844
   * @param corpId 企业id
   * @param suiteId 套件id
   * @param appId 旧的多应用套件中的应用id，新开发者请忽略
   * @returns
   */
  get(corpId: string, suiteId: string, appId: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/license/get_app_license_info', {
      corpid: corpId,
      suite_id: suiteId,
      appid: appId,
    });
  }

}
