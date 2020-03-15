'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class Client extends BaseClient
{

  bind(wechatId: string): Promise<any>
  {
    return this.httpPostJson('wxa/bind_tester', {
      wechatid: wechatId
    });
  }

  unbind(wechatId: string): Promise<any>
  {
    return this.httpPostJson('wxa/unbind_tester', {
      wechatid: wechatId
    });
  }

  list(): Promise<any>
  {
    return this.httpPostJson('wxa/memberauth', {
      action: 'get_experiencer',
    });
  }

}
