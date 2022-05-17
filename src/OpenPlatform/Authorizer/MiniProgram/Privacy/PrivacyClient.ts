'use strict';

import BaseClient from '../../../../Core/BaseClient';
import Stream from 'stream';

export default class PrivacyClient extends BaseClient
{

  /**
   * 查询小程序用户隐私保护指引
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/get_privacy_setting.html
   */
  get(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/getprivacysetting');
  }

  /**
   * 配置小程序用户隐私保护指引
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/set_privacy_setting.html
   * @param params
   */
  set(params: object): Promise<any>
  {
    return this.httpPostJson('wxa/setwebviewdomain', params);
  }

  /**
   * 上传小程序用户隐私保护指引
   * @see https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/upload_privacy_exfile.html
   * @param file 文件路径或可读stream
   */
  upload(file: string | Stream.Readable): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }
    return this.httpUpload('media/upload', {
      media: file
    });
  }

}
