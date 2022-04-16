'use strict';

import BaseClient from '../../Core/BaseClient';

export default class PluginDevClient extends BaseClient
{

  /**
   * 获取当前所有插件使用方
   * @param page 页码
   * @param size 每页记录数
   */
  getUsers(page: Number = 1, size: Number = 10): Promise<any>
  {
    return this.httpPostJson('wxa/devplugin', {
      action: 'dev_apply_list',
      page: page,
      num: size,
    });
  }

  /**
   * 同意申请
   * @param appId 插件appid
   */
  agree(appId: string): Promise<any>
  {
    return this.httpPostJson('wxa/devplugin', {
      action: 'dev_agree',
      appid: appId,
    });
  }

  /**
   * 拒绝申请
   * @param reason 插件appid
   */
  refuse(reason: string): Promise<any>
  {
    return this.httpPostJson('wxa/devplugin', {
      action: 'dev_refuse',
      reason: reason,
    });
  }

  /**
   * 删除已拒绝的申请者
   */
  delete(): Promise<any>
  {
    return this.httpPostJson('wxa/devplugin', {
      action: 'dev_delete',
    });
  }

}
