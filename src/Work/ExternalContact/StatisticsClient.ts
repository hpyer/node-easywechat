'use strict';

import BaseClient from '../../Core/BaseClient';

export default class StatisticsClient extends BaseClient
{

  userBehavior(userIds: string[], from: string, to: string): Promise<any>
  {
    let params = {
      userid: userIds,
      start_time: from,
      end_time: to,
    };
    return this.httpPostJson('cgi-bin/externalcontact/get_user_behavior_data', params);
  }

}
