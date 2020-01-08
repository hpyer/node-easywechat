'use strict';

import * as Fs from 'fs';
import BaseClient from '../../Core/BaseClient';
import { isString } from '../../Core/Utils';

export default class Client extends BaseClient
{
  protected baseUrl: string = 'https://api.weixin.qq.com/wxa/';

  async checkText(text: string): Promise<any>
  {
    return await this.httpPost('msg_sec_check', {
      json: true,
      body: {
        content: text,
      }
    });
  }

  async checkImage(file: any): Promise<any>
  {
    if (!file) {
      throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
    }
    if (isString(file)) {
      file = Fs.createReadStream(file);
    }

    return await this.httpPost('img_sec_check', {
      formData: {
        media: file,
      }
    });
  }

}
