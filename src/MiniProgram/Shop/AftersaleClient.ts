'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class AftersaleClient extends BaseClient {

  /**
   * 创建售后
   * @param aftersale 售后数据
   * @returns
   */
  add(aftersale: object): Promise<any>
  {
    return this.httpPostJson('shop/aftersale/add', aftersale);
  }

  /**
   * 获取订单下售后单
   * @param order 订单数据
   * @returns
   */
  get(order: object): Promise<any>
  {
    return this.httpPostJson('shop/aftersale/get', order);
  }

  /**
   * 更新售后
   * @param order 订单数据
   * @param aftersale 售后数据
   * @returns
   */
  update(order: object, aftersale: object): Promise<any>
  {
    return this.httpPostJson('shop/aftersale/update', merge(merge({}, order), aftersale));
  }

}
