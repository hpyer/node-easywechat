'use strict';

import BaseClient from '../../Core/BaseClient';
import * as Merge from 'merge';

export default class Client extends BaseClient
{

  getPaidUnionid(openid: string, optional: object = {}): Promise<any>
  {
    let params = Merge({
      openid,
    }, optional);
    return this.httpGet('wxa/getpaidunionid', params);
  }

}
