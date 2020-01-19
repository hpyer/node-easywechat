'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  categories(): Promise<any>
  {
    return this.httpGet('wxa/get_merchant_category');
  }

  districts(): Promise<any>
  {
    return this.httpGet('wxa/get_district');
  }

  searchFromMap(districtId: number, keyword: string): Promise<any>
  {
    return this.httpPostJson('wxa/search_map_poi', {
      districtid: districtId,
      keyword: keyword,
    });
  }

  getStatus(): Promise<any>
  {
    return this.httpPostJson('wxa/get_merchant_audit_info');
  }

  createMerchant(info: object): Promise<any>
  {
    return this.httpPostJson('wxa/apply_merchant', info);
  }

  updateMerchant(info: object): Promise<any>
  {
    return this.httpPostJson('wxa/modify_merchant', info);
  }

  createFromMap(info: object): Promise<any>
  {
    return this.httpPostJson('wxa/create_map_poi', info);
  }

  create(info: object): Promise<any>
  {
    return this.httpPostJson('wxa/add_store', info);
  }

  update(poiId: number, info: object): Promise<any>
  {
    info['poi_id'] = poiId;
    return this.httpPostJson('wxa/add_store', info);
  }

  get(poiId: number): Promise<any>
  {
    return this.httpPostJson('wxa/get_store_info', {
      poi_id: poiId,
    });
  }

  list(offset: number = 0, limit: number = 10): Promise<any>
  {
    return this.httpPostJson('wxa/get_store_list', {
      offset,
      limit,
    });
  }

  delete(poiId: number): Promise<any>
  {
    return this.httpPostJson('wxa/del_store', {
      poi_id: poiId,
    });
  }

}
