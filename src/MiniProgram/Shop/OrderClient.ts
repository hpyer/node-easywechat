'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class OrderClient extends BaseClient {

  /**
   * 检查场景值是否在支付校验范围内
   * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/order/check_scene.html
   * @param scene
   * @returns
   */
  sceneCheck(scene: number): Promise<any>
  {
    return this.httpPostJson('shop/scene/check', {
      scene,
    });
  }

  /**
   * 生成订单
   * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/order/add_order.html
   * @param order
   * @returns
   */
  add(order: object): Promise<any>
  {
    return this.httpPostJson('shop/order/add', order);
  }

  /**
   * 获取订单详情
   * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/order/get_order.html
   * @param openid 用户的openid
   * @param orderIds {order_id, out_order_id} 二选一
   * @returns
   */
  get(openid: string, orderIds: object): Promise<any>
  {
    return this.httpPostJson('shop/order/get', merge(merge({}, orderIds), {
      openid,
    }));
  }

  /**
   * 同步订单支付结果
   * @see https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/business-capabilities/ministore/minishopopencomponent2/API/order/pay_order.html
   * @param object
   * @returns
   */
  pay(params: object): Promise<any>
  {
    return this.httpPostJson('shop/order/pay', params);
  }

}
