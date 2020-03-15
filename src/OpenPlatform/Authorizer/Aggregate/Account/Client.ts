'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class Client extends BaseClient
{

  create(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/open/create', {
      appid: this.app['config']['app_id'],
    });
  }

  bindTo(openAppId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/open/bind', {
      appid: this.app['config']['app_id'],
      open_appid: openAppId,
    });
  }

  unbindFrom(openAppId: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/open/unbind', {
      appid: this.app['config']['app_id'],
      open_appid: openAppId,
    });
  }

  getBinding(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/open/get', {
      appid: this.app['config']['app_id'],
    });
  }

}
