
'use strict';

import BaseApplication from '../../Core/BaseApplication';

export default class VerifyTicket
{
  protected app: BaseApplication = null;

  constructor(app: BaseApplication)
  {
    this.app = app;
  }

  async setTicket(ticket: string): Promise<this>
  {
    let cacher = this.app.getCache();

    await cacher.set(this.getCacheKey(), ticket, 3600);

    if (!await cacher.has(this.getCacheKey())) {
      throw new Error('Failed to cache verify ticket.');
    }

    return this;
  }

  async getTicket(): Promise<string>
  {
    let cached = await this.app.getCache().get(this.getCacheKey());

    if (cached) {
      return cached;
    }

    throw new Error('Credential "component_verify_ticket" does not exist in cache.');
  }

  protected getCacheKey(): string
  {
    return 'easywechat.open_platform.verify_ticket.' + this.app.config.app_id;
  }
}
