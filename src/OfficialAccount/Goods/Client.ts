'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{
  add(product: Array<object>): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/add', {
      product,
    });
  }

  update(product: Array<object>): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/add', {
      product,
    });
  }

  status(status_ticket: string): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/status', {
      status_ticket,
    });
  }

  get(pid: string): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/getinfo', {
      product: {
        pid,
      },
    });
  }

  list(context: string = '', page: number = 1, size: number = 10): Promise<any>
  {
    return this.httpPostJson('scan/product/v2/getinfobypage', {
      page_context: context,
      page_num: page,
      page_size: size,
    });
  }

}
