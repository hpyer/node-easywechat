'use strict';

import BaseClient from '../../Core/BaseClient';

export default class PluginClient extends BaseClient
{

  /**
   * 获取已添加的插件列表
   */
  list(): Promise<any>
  {
    return this.httpPostJson('wxa/plugin', {
      action: 'list',
    });
  }

  /**
   * 发起使用插件申请
   * @param appId 插件appid
   */
  apply(appId: string): Promise<any>
  {
    return this.httpPostJson('wxa/plugin', {
      action: 'apply',
      plugin_appid: appId,
    });
  }

  /**
   * 删除已添加的插件
   * @param appId 插件appid
   */
  unbind(appId: string): Promise<any>
  {
    return this.httpPostJson('wxa/plugin', {
      action: 'unbind',
      plugin_appid: appId,
    });
  }

}
