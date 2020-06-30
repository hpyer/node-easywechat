'use strict';

import BaseClient from '../../Core/BaseClient';
import * as Merge from 'merge';
import { inArray } from '../../Core/Utils';

export default class NearbyPoiClient extends BaseClient
{

  add(params: object = {}): Promise<any>
  {
    params = Merge({
      is_comm_nearby: '1',
      poi_id: '',
    }, params);
    return this.httpPostJson('wxa/addnearbypoi', params);
  }

  update(poiId: string, params: object = {}): Promise<any>
  {
    params = Merge({
      is_comm_nearby: '1',
      poi_id: poiId,
    }, params);
    return this.httpPostJson('wxa/addnearbypoi', params);
  }

  delete(poiId: string = ''): Promise<any>
  {
    return this.httpPostJson('wxa/delnearbypoi', {
      poi_id: poiId,
    });
  }

  list(page: number, pageRows: number): Promise<any>
  {
    return this.httpGet('wxa/getnearbypoilist', {
      page: page,
      page_rows: pageRows,
    });
  }

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
