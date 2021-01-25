'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class CalendarClient extends BaseClient
{

  add(calendar: object): Promise<any>
  {
    let params = {
      calendar: calendar,
    };

    return this.httpPostJson('cgi-bin/oa/calendar/add', params);
  }

  update(id: number, calendar: object): Promise<any>
  {
    let params = merge({
      cal_id: id,
    }, calendar);

    return this.httpPostJson('cgi-bin/oa/calendar/update', params);
  }

  get(ids: Array<string>): Promise<any>
  {
    return this.httpPostJson('cgi-bin/oa/calendar/get', {
      cal_id_list: ids,
    });
  }

  delete(id: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/oa/calendar/del', {
      cal_id: id,
    });
  }

}
