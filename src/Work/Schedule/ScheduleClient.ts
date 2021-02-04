'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class ScheduleClient extends BaseClient
{

  add(schedule: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/oa/schedule/add', {
      schedule
    });
  }

  update(id: string, schedule: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/oa/schedule/update', {
      schedule: merge({
        schedule_id: id,
      }, schedule)
    });
  }

  get(ids: Array<string>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/oa/schedule/get', {
      schedule_id_list: ids,
    });
  }

  getByCalendar(calendarId: string, offset: number = 0, limit: number = 500): Promise<any>
  {
    return this.httpPostJson('cgi-bin/oa/schedule/get_by_calendar', {
      cal_id: calendarId,
      offset,
      limit,
    });
  }

  delete(id: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/oa/schedule/del', {
      schedule_id: id,
    });
  }

}
