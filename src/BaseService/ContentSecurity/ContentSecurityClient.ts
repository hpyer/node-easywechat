'use strict';

import BaseClient from '../../Core/BaseClient';
import Stream from 'stream';

export default class ContentSecurityClient extends BaseClient
{
  protected baseUrl: string = 'https://api.weixin.qq.com/wxa/';

  /**
   * 校验一段文本是否含有违法内容
   * @param text 待校验文本
   */
  async checkText(text: string): Promise<any>
  {
    return await this.httpPostJson('msg_sec_check', {
      content: text,
    });
  }

  /**
   * 校验一张图片是否含有敏感信息
   * @param file 文件路径或可读stream
   */
  async checkImage(file: string | Stream.Readable): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }

    return await this.httpUpload('img_sec_check', {
      media: file,
    });
  }

}
