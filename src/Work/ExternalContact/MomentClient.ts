'use strict';

import BaseClient from '../../Core/BaseClient';

export default class MomentClient extends BaseClient
{

  list(params: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/externalcontact/get_moment_list', params);
  }

  getTasks(momentId: string, cursor: string, limit: number): Promise<any>
  {
    let params = {
      moment_id: momentId,
      cursor,
      limit,
    };
    return this.httpPostJson('cgi-bin/externalcontact/get_moment_task', params);
  }

  getCustomers(momentId: string, userId: string, cursor: string, limit: number): Promise<any>
  {
    let params = {
      moment_id: momentId,
      userid: userId,
      cursor,
      limit,
    };

    return this.httpPostJson('cgi-bin/externalcontact/get_moment_customer_list', params);
  }

  getSendResult(momentId: string, userId: string, cursor: string, limit: number): Promise<any>
  {
    let params = {
      moment_id: momentId,
      userid: userId,
      cursor,
      limit,
    };

    return this.httpPostJson('cgi-bin/externalcontact/get_moment_send_result', params);
  }

  getComments(momentId: string, userId: string): Promise<any>
  {
    let params = {
      moment_id: momentId,
      userid: userId,
    };

    return this.httpPostJson('cgi-bin/externalcontact/get_moment_comments', params);
  }

}
