'use strict';

import Client from './Client';

export default class RelationClient extends Client
{

  bindPages(deviceIdentifier: object, pageIds: Array<number>): Promise<any>
  {
    return this.httpPostJson('shakearound/device/bindpage', {
      device_identifier: deviceIdentifier,
      page_ids: pageIds,
    });
  }

  listByDeviceId(deviceIdentifier: object): Promise<any>
  {
    return this.httpPostJson('shakearound/relation/search', {
      type: 1,
      device_identifier: deviceIdentifier,
    });
  }

  listByPageId(pageId: number, begin: number, count: number): Promise<any>
  {
    return this.httpPostJson('shakearound/relation/search', {
      type: 2,
      page_id: pageId,
      begin,
      count,
    });
  }

}
