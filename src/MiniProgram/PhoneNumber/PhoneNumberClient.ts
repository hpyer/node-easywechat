'use strict';

import BaseClient from '../../Core/BaseClient';

export default class PhoneNumber extends BaseClient {

  /**
   * 获取用户手机号
   * @see https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/phonenumber/phonenumber.getPhoneNumber.html
   * @param code [前端获取code方法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)
   * @returns
   */
  getUserPhoneNumber(code: string): Promise<any>
  {
    return this.httpPostJson('wxa/business/getuserphonenumber', {
      code
    });
  }

}
