'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray } from '../../Core/Utils';

export default class Client extends BaseClient
{

  clearQuota(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/clear_quota', {
      appid: this.app['config']['app_id'],
    });
  }

  getValidIps(): Promise<any>
  {
    return this.httpGet('cgi-bin/getcallbackip');
  }

  checkCallbackUrl(action: string = 'all', operator: string = 'DEFAULT'): Promise<any>
  {
    if (!inArray(action, ['dns', 'ping', 'all'], true)) {
      throw new Error('The action must be dns, ping, all.');
    }

    operator = operator.toUpperCase();

    if (!inArray(operator, ['CHINANET', 'UNICOM', 'CAP', 'DEFAULT'], true)) {
      throw new Error('The operator must be CHINANET, UNICOM, CAP, DEFAULT.');
    }

    return this.httpPostJson('cgi-bin/callback/check', {
      action,
      check_operator: operator,
    });
  }

}
