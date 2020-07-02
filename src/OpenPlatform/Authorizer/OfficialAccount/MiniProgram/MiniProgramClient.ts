'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class MiniProgramClient extends BaseClient
{

  /**
   * 获取公众号关联的小程序
   */
  list(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/wxamplinkget');
  }

  /**
   * 关联小程序
   * @param appId 小程序 appid
   * @param notifyUsers 是否发送模板消息通知公众号粉丝
   * @param showProfile 是否展示公众号主页中
   */
  link(appId: string, notifyUsers: Boolean = true, showProfile: Boolean = false): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/wxamplink', {
      appid: appId,
      notify_users: notifyUsers ? 'true' : 'false',
      show_profile: showProfile ? 'true' : 'false',
    });
  }

  /**
   * 解除已关联的小程序
   * @param appId 小程序 appid
   */
  uplink(appId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/wxopen/wxampunlink', {
      appid: appId,
    });
  }

}
