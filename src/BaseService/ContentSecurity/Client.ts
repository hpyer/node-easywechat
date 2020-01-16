'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  protected baseUrl: string = 'https://api.weixin.qq.com/wxa/';

  async checkText(text: string): Promise<any>
  {
    return await this.httpPostJson('msg_sec_check', {
      content: text,
    });
  }

  async checkImage(file: any): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }

    return await this.httpUpload('img_sec_check', {
      media: file,
    });
  }

}
