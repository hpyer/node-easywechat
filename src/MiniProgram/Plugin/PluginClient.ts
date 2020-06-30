'use strict';

import BaseClient from '../../Core/BaseClient';

export default class PluginClient extends BaseClient
{

  list(): Promise<any>
  {
    return this.httpPostJson('wxa/plugin', {
      action: 'list',
    });
  }

  apply(appId: string): Promise<any>
  {
    return this.httpPostJson('wxa/plugin', {
      action: 'apply',
      plugin_appid: appId,
    });
  }

  unbind(appId: string): Promise<any>
  {
    return this.httpPostJson('wxa/plugin', {
      action: 'unbind',
      plugin_appid: appId,
    });
  }

}
