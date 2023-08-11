'use strict';

import BaseClient from '../../../../MiniProgram/Base/MiniProgramBase';

export default class MiniProgramBaseClient extends BaseClient
{

  /**
   * 获取小程序版本信息
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/code/get_versioninfo.html
   */
  getVersionInfo(): Promise<any>
  {
    return this.httpPostJson('wxa/getversioninfo');
  }

}
