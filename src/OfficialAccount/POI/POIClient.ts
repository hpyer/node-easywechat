'use strict';

import BaseClient from '../../Core/BaseClient';

export default class POIClient extends BaseClient
{
  /**
   * 获取门店类目表
   */
  categories(): Promise<any>
  {
    return this.httpGet('cgi-bin/poi/getwxcategory');
  }

  /**
   * 查询门店信息
   * @param poi_id 门店id
   */
  get(poi_id: number): Promise<any>
  {
    return this.httpPostJson('cgi-bin/poi/getpoi', {
      poi_id,
    });
  }

  /**
   * 查询门店列表
   * @param begin 开始位置，从0开始，默认：0
   * @param limit 返回数据条数，最大允许50，默认：20
   */
  list(begin: number = 0, limit: number = 20): Promise<any>
  {
    return this.httpPostJson('cgi-bin/poi/getpoilist', {
      begin,
      limit,
    });
  }

  /**
   * 创建门店
   * @param base_info 门店信息
   */
  create(base_info: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/poi/addpoi', {
      business: {
        base_info
      },
    });
  }

  /**
   * 创建门店并返回id
   * @param base_info 门店信息
   */
  async createAndGetId(base_info: object): Promise<any>
  {
    let res = await this.create(base_info);
    return res && res['poi_id'] ? res['poi_id'] : '';
  }

  /**
   * 修改门店信息
   * @param poi_id 门店id
   * @param base_info 门店信息
   */
  update(poi_id: number, base_info: object): Promise<any>
  {
    base_info['poi_id'] = poi_id;
    return this.httpPostJson('cgi-bin/poi/updatepoi', {
      business: {
        base_info
      },
    });
  }

  /**
   * 删除门店
   * @param poi_id 门店id
   */
  delete(poi_id: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/poi/delpoi', {
      poi_id,
    });
  }

}
