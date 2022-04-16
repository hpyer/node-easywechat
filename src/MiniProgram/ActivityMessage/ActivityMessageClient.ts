'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray } from '../../Core/Utils';

export default class ActivityMessageClient extends BaseClient
{

  createActivityId(): Promise<any>
  {
    return this.httpGet('cgi-bin/message/wxopen/activityid/create');
  }

  updateMessage(activityId: string, state: Number = 0, params: object = {}): Promise<any>
  {
    if (!inArray(state, [0, 1, '0', '1'])) {
      throw new Error('"state" should be "0" or "1".');
    }

    params = {
      activity_id: activityId,
      target_state: state,
      template_info: {
        parameter_list: this.formatParameters(params),
      },
    };

    return this.httpPostJson('cgi-bin/message/wxopen/updatablemsg/send', params);
  }

  protected formatParameters(params: object): Array<object>
  {
    let formatted = [];

    for (let key in params) {
      if (inArray(key, ['member_count', 'room_limit', 'path', 'version_type'])) {
        continue;
      }

      if (key === 'version_type' && !inArray(params[key], ['develop', 'trial', 'release'])) {
        throw new Error('Invalid value of attribute "version_type".');
      }

      formatted.push({
        name: key,
        value: params[key],
      });
    }

    return formatted;
  }

}
