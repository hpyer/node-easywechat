'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge, inArray } from '../../Core/Utils';

export default class NearbyPoiClient extends BaseClient
{

  /**
   * 添加地点
   * @param params 地点信息
   */
  add(params: object = {}): Promise<any>
  {
    params = merge({
      is_comm_nearby: '1',
      poi_id: '',
    }, params);
    return this.httpPostJson('wxa/addnearbypoi', params);
  }

  /**
   * 更新地点
   * @param poiId 地点id
   * @param params 地点信息
   */
  update(poiId: string, params: object = {}): Promise<any>
  {
    params = merge({
      is_comm_nearby: '1',
      poi_id: poiId,
    }, params);
    return this.httpPostJson('wxa/addnearbypoi', params);
  }

  /**
   * 删除地点
   * @param poiId 地点id
   */
  delete(poiId: string = ''): Promise<any>
  {
    return this.httpPostJson('wxa/delnearbypoi', {
      poi_id: poiId,
    });
  }

  /**
   * 地点列表
   * @param page 页码
   * @param pageRows 每页记录数
   */
  list(page: number, pageRows: number): Promise<any>
  {
    return this.httpGet('wxa/getnearbypoilist', {
      page: page,
      page_rows: pageRows,
    });
  }

  /**
   * 设置地点展示状态
   * @param poiId 地点id
   * @param status 0:不展示；1:展示
   */
  setVisibility(poiId: string = '', status: number): Promise<any>
  {
    if (!inArray(status, [0, 1, '0', '1'])) {
      throw new Error('status should be 0 or 1.');
    }
    return this.httpPostJson('wxa/setnearbypoishowstatus', {
      poi_id: poiId,
      status,
    });
  }

}
