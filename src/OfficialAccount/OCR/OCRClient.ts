'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray } from '../../Core/Utils';

export default class OCRClient extends BaseClient
{
  protected allowTypes: Array<string> = [
    'photo',
    'scan',
  ];

  /**
   * 身份证识别
   * @param img_url 图片url
   * @param type
   */
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

  /**
   * 银行卡识别
   * @param img_url 图片url
   */
  bankCard(img_url: string): Promise<any>
  {
    return this.httpGet('cv/ocr/bankcard', {
      img_url,
    });
  }

  /**
   * 行驶证识别
   * @param img_url 图片url
   */
  vehicleLicense(img_url: string): Promise<any>
  {
    return this.httpGet('cv/ocr/driving', {
      img_url,
    });
  }

}
