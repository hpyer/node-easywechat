'use strict';

import BaseClient from '../../Core/BaseClient';
import { inArray } from '../../Core/Utils';

export default class OfficialAccountBase extends BaseClient
{

  /**
   * 清理接口调用次数
   * 此接口官方有每月调用限制，不可随意调用
   */
  clearQuota(): Promise<any>
  {
    return this.httpPostJson('cgi-bin/clear_quota', {
      appid: this.app.config.app_id,
    });
  }

  /**
   * 获取微信服务器 IP (或IP段)
   */
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
