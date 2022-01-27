
'use strict';

import BaseApplication from '../../Core/BaseApplication';

export default class SuiteTicket
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
      throw new Error('Failed to cache suite ticket.');
    }

    return this;
  }

  async getTicket(): Promise<string>
  {
    let cached = await this.app.getCache().get(this.getCacheKey());

    if (cached) {
      return cached;
    }

    throw new Error('Credential "suite_ticket" does not exist in cache.');
  }

  protected getCacheKey(): string
  {
    return 'easywechat.open_work.suite_ticket.' + this.app.config.suite_id;
  }
}
