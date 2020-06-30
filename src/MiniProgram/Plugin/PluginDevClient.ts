'use strict';

import BaseClient from '../../Core/BaseClient';

export default class PluginDevClient extends BaseClient
{

  getUsers(page: Number = 1, size: Number = 10): Promise<any>
  {
    return this.httpPostJson('wxa/devplugin', {
      action: 'dev_apply_list',
      page: page,
      num: size,
    });
  }

  agree(appId: string): Promise<any>
  {
    return this.httpPostJson('wxa/devplugin', {
      action: 'dev_agree',
      appid: appId,
    });
  }

  refuse(reason: string): Promise<any>
  {
    return this.httpPostJson('wxa/devplugin', {
      action: 'dev_refuse',
      reason: reason,
    });
  }

  delete(): Promise<any>
  {
    return this.httpPostJson('wxa/devplugin', {
      action: 'dev_delete',
    });
  }

}
