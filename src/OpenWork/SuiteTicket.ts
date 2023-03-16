'use strict';

import CacheInterface from '../Core/Contracts/CacheInterface';
import SuiteTicketInterface from './Contracts/SuiteTicketInterface';

class SuiteTicket implements SuiteTicketInterface
{
  constructor(
    protected suiteId: string,
    protected cache: CacheInterface = null,
    protected key: string = null,
  ) {
  }

  getKey(): string
  {
    if (!this.key) {
      this.key = `open_work.suite_ticket.${this.suiteId}`;
    }
    return this.key;
  }

  setKey(key: string): this
  {
    this.key = key;
    return this;
  }

  async setTicket(ticket: string): Promise<this>
  {
    if (this.cache) {
      await this.cache.set(this.getKey(), ticket, 6000);
    }
    return this;
  }

  async getTicket(): Promise<string>
  {
    let ticket: string = '';
    if (this.cache) {
      ticket = await this.cache.get(this.getKey());
    }

    if (!ticket || typeof ticket != 'string') {
      throw new Error('No suite_ticket found.');
    }

    return ticket;
  }
};

export = SuiteTicket;
