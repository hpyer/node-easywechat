'use strict';

import BaseClient from '../../Core/BaseClient';

export default class LiveClient extends BaseClient
{

  getUserLivingId(userId: string, beginTime: number, endTime: number, nextKey: string = '0', limit: number = 100): Promise<any>
  {
    let params = {
      userid: userId,
      begin_time: beginTime,
      end_time: endTime,
      next_key: nextKey,
      limit: limit,
    };

    return this.httpPostJson('cgi-bin/living/get_user_livingid', params);
  }

  getLiving(livingId: string): Promise<any>
  {
    let params = {
      livingid: livingId,
    };

    return this.httpGet('cgi-bin/living/get_living_info', params);
  }

  getWatchStat(livingId: string, nextKey: string = '0'): Promise<any>
  {
    let params = {
      livingid: livingId,
      next_key: nextKey,
    };

    return this.httpPostJson('cgi-bin/living/get_watch_stat', params);
  }

}
