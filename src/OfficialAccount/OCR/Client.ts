'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray } from '../../Core/Utils';

export default class Client extends BaseClient
{
  protected allowTypes: Array<string> = [
    'photo',
    'scan',
  ];

  async idCard(img_url: string, type: string = 'photo'): Promise<any>
  {
    if (!inArray(type, this.allowTypes, true)) {
      throw new Error(`Unsupported type: '${type}'`);
    }

    return await this.httpGet('cv/ocr/idcard', {
      qs: {
        type,
        img_url,
      }
    });
  }

  async bankCard(img_url: string): Promise<any>
  {
    return await this.httpGet('cv/ocr/bankcard', {
      qs: {
        img_url,
      }
    });
  }

  async vehicleLicense(img_url: string): Promise<any>
  {
    return await this.httpGet('cv/ocr/driving', {
      qs: {
        img_url,
      }
    });
  }

}
