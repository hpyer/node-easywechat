'use strict';

import CacheInterface from '../Core/Contracts/CacheInterface';
import VerifyTicketInterface from './Contracts/VerifyTicketInterface';

class VerifyTicket implements VerifyTicketInterface
{
  constructor(
    protected appId: string,
    protected key: string = null,
    protected cache: CacheInterface = null,
  ) {
  }

  getKey(): string
  {
    if (!this.key) {
      this.key = `open_platform.verify_ticket.${this.appId}`;
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
      throw new Error('No component_verify_ticket found.');
    }

    return ticket;
  }
};

export = VerifyTicket;
