'use strict';

import BaseClient from '../../Core/BaseClient';
import { merge } from '../../Core/Utils';

export default class DepartmentClient extends BaseClient
{

  create(data: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/department/create', data);
  }

  update(id: string, data: object): Promise<any>
  {
    let params = merge({
      id: id,
    }, data);

    return this.httpPostJson('cgi-bin/department/update', params);
  }

  delete(id: string): Promise<any>
  {
    return this.httpGet('cgi-bin/department/delete', {
      id
    });
  }

  list(id: string): Promise<any>
  {
    return this.httpGet('cgi-bin/department/list', {
      id,
    });
  }

}
