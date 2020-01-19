'use strict';

import Client from './Client';

export default class StatsClient extends Client
{

  deviceSummary(deviceIdentifier: object, beginTime: number, endTime: number): Promise<any>
  {
    return this.httpPostJson('shakearound/statistics/device', {
      device_identifier: deviceIdentifier,
      begin_date: beginTime,
      end_date: endTime,
    });
  }

  devicesSummary(timestamp: number, pageIndex: number): Promise<any>
  {
    return this.httpPostJson('shakearound/statistics/devicelist', {
      date: timestamp,
      page_index: pageIndex,
    });
  }

  pageSummary(pageId: number, beginTime: number, endTime: number): Promise<any>
  {
    return this.httpPostJson('shakearound/statistics/page', {
      page_id: pageId,
      begin_date: beginTime,
      end_date: endTime,
    });
  }

  pagesSummary(timestamp: number, pageIndex: number): Promise<any>
  {
    return this.httpPostJson('shakearound/statistics/pagelist', {
      date: timestamp,
      page_index: pageIndex,
    });
  }

}
