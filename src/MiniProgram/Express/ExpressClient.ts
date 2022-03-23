'use strict';

import BaseClient from '../../Core/BaseClient';

export default class ExpressClient extends BaseClient
{

  /**
   * 绑定、解绑物流账号
   */
  bind(params: object): Promise<any>
  {
    if (!params['type'] || !params['biz_id'] || !params['delivery_id']) {
      throw new Error('Missing parameter.');
    }
    return this.httpPostJson('cgi-bin/express/business/account/bind', params);
  }

  /**
   * 获取支持的快递公司列表
   */
  listProviders(): Promise<any>
  {
    return this.httpGet('cgi-bin/express/business/delivery/getall');
  }

  /**
   * 获取所有绑定的物流账号
   */
  getAllAccount(): Promise<any>
  {
    return this.httpGet('cgi-bin/express/business/account/getall');
  }

  /**
   * 生成运单
   * @param params 订单信息
   */
  createWaybill(params: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/order/add', params);
  }

  /**
   * 取消运单
   * @param params 订单信息
   */
  deleteWaybill(params: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/order/cancel', params);
  }

  /**
   * 获取运单数据
   * @param params 订单信息
   */
  getWaybill(params: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/order/get', params);
  }

  /**
   * 查询运单轨迹
   * @param params 订单信息
   */
  getWaybillTrack(params: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/path/get', params);
  }

  /**
   * 获取电子面单余额
   * @param deliveryId 快递公司ID
   * @param bizId 快递公司客户编码
   */
  getBalance(deliveryId: string = '', bizId: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/quota/get', {
      delivery_id: deliveryId,
      biz_id: bizId,
    });
  }

  /**
   * 绑定打印员
   * @param openid 用户openid
   */
  bindPrinter(openid: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/printer/update', {
      update_type: 'bind',
      openid: openid,
    });
  }

  /**
   * 解绑打印员
   * @param openid 用户openid
   */
  unbindPrinter(openid: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/business/printer/update', {
      update_type: 'unbind',
      openid: openid,
    });
  }

  /**
   * 创建退货 ID
   */
  createReturn(params: object = {}): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/delivery/return/add', params);
  }

  /**
   * 查询退货 ID 状态
   * @param returnId 退货id
   */
  getReturn(returnId: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/delivery/return/get', {
      return_id: returnId,
    });
  }

  /**
   * 解绑退货 ID
   * @param returnId 退货id
   */
  unbindReturn(returnId: string = ''): Promise<any>
  {
    return this.httpPostJson('cgi-bin/express/delivery/return/unbind', {
      return_id: returnId,
    });
  }

}
