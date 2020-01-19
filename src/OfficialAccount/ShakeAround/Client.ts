'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  status(): Promise<any>
  {
    return this.httpGet('shakearound/account/auditstatus');
  }

  register(data: object): Promise<any>
  {
    return this.httpPostJson('shakearound/account/register', data);
  }

  user(ticket: string = '', needPoi: Boolean = false): Promise<any>
  {
    let params = {
      ticket,
    };
    if (needPoi) {
      params['need_poi'] = 1;
    }
    return this.httpPostJson('shakearound/user/getshakeinfo', params);
  }

  userWithPoi(ticket: string = ''): Promise<any>
  {
    return this.user(ticket, true);
  }

}
