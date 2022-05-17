'use strict';

import BaseClient from '../../Core/BaseClient';

export default class ProductClient extends BaseClient
{

  /**
   * 创建商品图册
   * @see https://developer.work.weixin.qq.com/document/path/95096#创建商品图册
   * @param params
   * @returns
   */
  create(params: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/add_product_album', params);
  }

  /**
   * 获取商品图册
   * @see https://developer.work.weixin.qq.com/document/path/95096#获取商品图册
   * @param productId 商品id
   * @returns
   */
  get(productId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_product_album', {
      product_id: productId,
    });
  }

  /**
   * 获取商品图册列表
   * @see https://developer.work.weixin.qq.com/document/path/95096#获取商品图册列表
   * @param limit 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取默认值
   * @param cursor 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   * @returns
   */
  getList(limit: number, cursor: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_product_album_list', {
      limit,
      cursor,
    });
  }

  /**
   * 编辑商品图册
   * @see https://developer.work.weixin.qq.com/document/path/95096#编辑商品图册
   * @param params
   * @returns
   */
  update(params: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/update_product_album', params);
  }

  /**
   * 删除商品图册
   * @see https://developer.work.weixin.qq.com/document/path/95096#删除商品图册
   * @param productId 商品id
   * @returns
   */
  delete(productId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/delete_product_album', {
      product_id: productId,
    });
  }

}
