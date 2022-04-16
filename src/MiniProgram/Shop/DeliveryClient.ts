'use strict';

import BaseClient from '../../Core/BaseClient';

export default class DeliveryClient extends BaseClient {

  /**
   * 获取快递公司列表
   * @returns
   */
  getCompanyList(): Promise<any>
  {
    return this.httpPostJson('shop/delivery/get_company_list');
  }

  /**
   * 订单发货
   * @param order
   * @returns
   */
  send(order: object): Promise<any>
  {
    return this.httpPostJson('shop/delivery/send', order);
  }

  /**
   * 订单确认收货
   * @param order
   * @returns
   */
  recieve(order: object): Promise<any>
  {
    return this.httpPostJson('shop/delivery/recieve', order);
  }

}
