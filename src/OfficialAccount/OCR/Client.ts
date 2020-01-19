'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray } from '../../Core/Utils';

export default class Client extends BaseClient
{
  protected allowTypes: Array<string> = [
    'photo',
    'scan',
  ];

  idCard(img_url: string, type: string = 'photo'): Promise<any>
  {
    if (!inArray(type, this.allowTypes, true)) {
      throw new Error(`Unsupported type: '${type}'`);
    }

    return this.httpGet('cv/ocr/idcard', {
      type,
      img_url,
    });
  }

  bankCard(img_url: string): Promise<any>
  {
    return this.httpGet('cv/ocr/bankcard', {
      img_url,
    });
  }

  vehicleLicense(img_url: string): Promise<any>
  {
    return this.httpGet('cv/ocr/driving', {
      img_url,
    });
  }

}
