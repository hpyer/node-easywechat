'use strict';

import BaseClient from '../../Core/BaseClient';

export default class AutoReplyClient extends BaseClient
{
  /**
   * 获取当前设置的回复规则
   */
  current(): Promise<any>
  {
    return this.httpGet('cgi-bin/get_current_autoreply_info');
  }

}
