'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class MiniProgramClient extends BaseClient
{

  list(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/wxamplinkget');
  }

  link(appId: string, notifyUsers: Boolean = true, showProfile: Boolean = false): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/wxamplink', {
      appid: appId,
      notify_users: notifyUsers ? 'true' : 'false',
      show_profile: showProfile ? 'true' : 'false',
    });
  }

  uplink(appId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/wxampunlink', {
      appid: appId,
    });
  }

}
