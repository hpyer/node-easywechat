'use strict';

import BaseClient from '../../Core/BaseClient';

export default class CustomerServiceSession extends BaseClient
{

  list(account: string): Promise<any>
  {
    return this.httpGet('customservice/kfsession/getsessionlist', {
      kf_account: account,
    });
  }

  waiting(): Promise<any>
  {
    return this.httpGet('customservice/kfsession/getwaitcase');
  }

  create(account: string, openid: string): Promise<any>
  {
    let params = {
      kf_account: account,
      openid: openid,
    };
    return this.httpPostJson('customservice/kfsession/create', params);
  }

  close(account: string, openid: string): Promise<any>
  {
    let params = {
      kf_account: account,
      openid: openid,
    };
    return this.httpPostJson('customservice/kfsession/close', params);
  }

  get(openid: string): Promise<any>
  {
    return this.httpGet('customservice/kfsession/getsession', {
      openid: openid,
    });
  }

}
