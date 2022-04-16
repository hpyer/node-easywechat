'use strict';

import BaseClient from '../../Core/BaseClient';

export default class GoodsClient extends BaseClient
{
  /**
   * 批量导入商品
   * @param product 商品信息列表，每次最多1000条
   */
  add(product: Array<object>): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/add', {
      product,
    });
  }

  /**
   * 批量更新商品
   * @param product 商品信息列表，每次最多1000条
   */
  update(product: Array<object>): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/add', {
      product,
    });
  }

  /**
   * 查询导入/更新商品状态
   * @param status_ticket 从add或update方法返回
   */
  status(status_ticket: string): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/status', {
      status_ticket,
    });
  }

  /**
   * 获取单个商品信息
   * @param pid 商品id
   */
  get(pid: string): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/getinfo', {
      product: {
        pid,
      },
    });
  }

  /**
   * 分页获取商品信息
   * @param context page 为 1 时传空即可。当 page 大于 1 时必填，填入上一次访问本接口返回的 page_context
   * @param page 页码
   * @param size 每页数据大小，目前限制为100以内，默认：10
   */
  list(context: string = '', page: number = 1, size: number = 10): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/getinfobypage', {
      page_context: context,
      page_num: page,
      page_size: size,
    });
  }

}
