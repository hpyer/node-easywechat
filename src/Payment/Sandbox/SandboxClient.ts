'use strict';

import BaseClient from '../Core/BaseClient';
import { createHash } from '../../Core/Utils';

export default class SandboxClient extends BaseClient
{

  /**
   * 获取沙盒环境的密钥
   */
  async getKey(): Promise<string>
  {
    let cacher = this.app.getCache();

    let key = await cacher.get(this.getCacheKey());
    if (key) return key;

    let res = await this.request('sandboxnew/pay/getsignkey');
    if (res && 'SUCCESS' === res['return_code']) {
      key = res['sandbox_signkey'];
      await cacher.set(this.getCacheKey(), key, 24 * 3600);
      return key;
    }

    throw new Error(res['retmsg'] || res['return_msg']);
  }

  protected getCacheKey(): string
  {
    return 'easywechat.payment.sandbox.' + createHash(this.app.config.app_id, 'md5');
  }

}
