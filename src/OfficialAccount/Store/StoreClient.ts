'use strict';

import BaseClient from '../../Core/BaseClient';

export default class StoreClient extends BaseClient
{

  /**
   * 获取门店小程序类目
   */
  categories(): Promise<any>
  {
    return this.httpGet('wxa/get_merchant_category');
  }

  /**
   * 从腾讯地图拉取省市区信息
   */
  districts(): Promise<any>
  {
    return this.httpGet('wxa/get_district');
  }

  /**
   * 在腾讯地图中搜索门店
   * @param districtId 省市区信息id
   * @param keyword 搜索的关键词
   */
  searchFromMap(districtId: number, keyword: string): Promise<any>
  {
    return this.httpPostJson('wxa/search_map_poi', {
      districtid: districtId,
      keyword: keyword,
    });
  }

  /**
   * 查询门店小程序审核结果
   */
  getStatus(): Promise<any>
  {
    return this.httpPostJson('wxa/get_merchant_audit_info');
  }

  /**
   * 创建门店小程序
   * @param info 详细信息
   */
  createMerchant(info: object): Promise<any>
  {
    return this.httpPostJson('wxa/apply_merchant', info);
  }

  /**
   * 修改门店小程序信息
   * @param info 详细信息
   */
  updateMerchant(info: object): Promise<any>
  {
    return this.httpPostJson('wxa/modify_merchant', info);
  }

  /**
   * 在腾讯地图中创建门店
   * @param info 详细信息
   */
  createFromMap(info: object): Promise<any>
  {
    return this.httpPostJson('wxa/create_map_poi', info);
  }

  /**
   * 添加门店
   * @param info 详细信息
   */
  create(info: object): Promise<any>
  {
    return this.httpPostJson('wxa/add_store', info);
  }

  /**
   * 更改门店
   * @param poiId 门店id
   * @param info 详细信息
   */
  update(poiId: number, info: object): Promise<any>
  {
    info['poi_id'] = poiId;
    return this.httpPostJson('wxa/update_store', info);
  }

  /**
   * 获取单个门店信息
   * @param poiId 门店id
   */
  get(poiId: number): Promise<any>
  {
    return this.httpPostJson('wxa/get_store_info', {
      poi_id: poiId,
    });
  }

  /**
   * 获取门店信息列表
   * @param offset 初始偏移位置，从0开始计数
   * @param limit 获取门店个数，默认：10
   */
  list(offset: number = 0, limit: number = 10): Promise<any>
  {
    return this.httpPostJson('wxa/get_store_list', {
      offset,
      limit,
    });
  }

  /**
   * 删除门店
   * @param poiId 门店id
   */
  delete(poiId: number): Promise<any>
  {
    return this.httpPostJson('wxa/del_store', {
      poi_id: poiId,
    });
  }

}
