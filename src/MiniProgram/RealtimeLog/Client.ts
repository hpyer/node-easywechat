'use strict';

import BaseClient from '../../Core/BaseClient';
import * as Merge from 'merge';

export default class Client extends BaseClient
{

  search(date: string, beginTime: number, endTime: number, options: object = {}): Promise<any>
  {
    let params = Merge({
      date: date,
      begintime: beginTime,
      endtime: endTime,
    }, options);

    return this.httpGet('wxaapi/userlog/userlog_search', params);
  }

}
