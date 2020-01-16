'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  async add(product: Array<object>): Promise<any>
  {
    return await this.httpPostJson('scan/product/v2/add', {
      product,
    });
  }

  async update(product: Array<object>): Promise<any>
  {
    return await this.httpPostJson('scan/product/v2/add', {
      product,
    });
  }

  async status(status_ticket: string): Promise<any>
  {
    return await this.httpPostJson('scan/product/v2/status', {
      status_ticket,
    });
  }

  async get(pid: string): Promise<any>
  {
    return await this.httpPostJson('scan/product/v2/getinfo', {
      product: {
        pid,
      },
    });
  }

  async list(context: string = '', page: number = 1, size: number = 10): Promise<any>
  {
    return await this.httpPostJson('scan/product/v2/getinfobypage', {
      page_context: context,
      page_num: page,
      page_size: size,
    });
  }

}
