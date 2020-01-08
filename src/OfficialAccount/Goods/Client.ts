'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  async add(product: Array<object>): Promise<any>
  {
    return await this.httpPost('scan/product/v2/add', {
      json: true,
      body: {
        product,
      }
    });
  }

  async update(product: Array<object>): Promise<any>
  {
    return await this.httpPost('scan/product/v2/add', {
      json: true,
      body: {
        product,
      }
    });
  }

  async status(status_ticket: string): Promise<any>
  {
    return await this.httpPost('scan/product/v2/status', {
      json: true,
      data: {
        status_ticket,
      }
    });
  }

  async get(pid: string): Promise<any>
  {
    return await this.httpPost('scan/product/v2/getinfo', {
      json: true,
      data: {
        product: {
          pid,
        },
      }
    });
  }

  async list(context: string = '', page: number = 1, size: number = 10): Promise<any>
  {
    return await this.httpPost('scan/product/v2/getinfobypage', {
      json: true,
      body: {
        page_context: context,
        page_num: page,
        page_size: size,
      }
    });
  }

}
