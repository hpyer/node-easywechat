'use strict';

import BaseClient from '../../Core/BaseClient';
import * as Merge from 'merge';

export default class Client extends BaseClient
{

  query(keyword: string, categories: string, optional: object = {}): Promise<any>
  {
    let params = Merge({
      query: keyword,
      category: categories,
      appid: this.app['config'].app_id,
    }, optional);
    return this.httpPostJson('semantic/semproxy/search', params);
  }

}
