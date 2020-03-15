'use strict';

import BaseClient from '../../../../Core/BaseClient';

export default class Client extends BaseClient
{

  modify(params: object): Promise<any>
  {
    return this.httpPostJson('wxa/modify_domain', params);
  }

  setWebviewDomain(domains: Array<string>, action: string = 'add'): Promise<any>
  {
    return this.httpPostJson('wxa/setwebviewdomain', {
      action: action,
      webviewdomain: domains,
    });
  }

}
