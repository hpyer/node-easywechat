'use strict';

import BaseClient from '../../Core/BaseClient';

export default class DeviceClient extends BaseClient
{

  apply(data: object): Promise<any>
  {
    return this.httpPostJson('shakearound/device/applyid', data);
  }

  status(applyId: string): Promise<any>
  {
    return this.httpPostJson('shakearound/device/applystatus', {
      apply_id: applyId,
    });
  }

  update(deviceIdentifier: object, comment: string): Promise<any>
  {
    return this.httpPostJson('shakearound/device/update', {
      device_identifier: deviceIdentifier,
      comment,
    });
  }

  bindPoi(deviceIdentifier: object, poiId: number): Promise<any>
  {
    return this.httpPostJson('shakearound/device/bindlocation', {
      device_identifier: deviceIdentifier,
      poi_id: poiId,
    });
  }

  bindThirdPoi(deviceIdentifier: object, poiId: number, appId: string): Promise<any>
  {
    return this.httpPostJson('shakearound/device/bindlocation', {
      device_identifier: deviceIdentifier,
      poi_id: poiId,
      type: 2,
      poi_appid: appId,
    });
  }

  search(params: object): Promise<any>
  {
    return this.httpPostJson('shakearound/device/search', params);
  }

  listByIds(deviceIdentifiers: object): Promise<any>
  {
    return this.search({
      type: 1,
      device_identifiers: deviceIdentifiers,
    });
  }

  list(lastId: number, count: number): Promise<any>
  {
    return this.search({
      type: 2,
      last_seen: lastId,
      count,
    });
  }

  listByApplyId(applyId: number, lastId: number, count: number): Promise<any>
  {
    return this.search({
      type: 3,
      apply_id: applyId,
      last_seen: lastId,
      count,
    });
  }

}
