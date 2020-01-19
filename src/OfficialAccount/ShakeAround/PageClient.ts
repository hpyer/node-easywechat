'use strict';

import BaseClient from '../../Core/BaseClient';

export default class PageClient extends BaseClient
{

  create(data: object): Promise<any>
  {
    return this.httpPostJson('shakearound/page/add', data);
  }

  update(pageId: number, data: object): Promise<any>
  {
    data['page_id'] = pageId;
    return this.httpPostJson('shakearound/page/update', data);
  }

  listByIds(pageIds: Array<number>): Promise<any>
  {
    return this.httpPostJson('shakearound/page/search', {
      type: 1,
      page_ids: pageIds,
    });
  }

  list(begin: number, count: number): Promise<any>
  {
    return this.httpPostJson('shakearound/page/search', {
      type: 2,
      begin,
      count,
    });
  }

  delete(pageId: number): Promise<any>
  {
    return this.httpPostJson('shakearound/page/delete', {
      page_id: pageId,
    });
  }

}
