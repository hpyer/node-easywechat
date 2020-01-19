'use strict';

import Client from './Client';

export default class BoardingPassClient extends Client
{

  checkin(params: object): Promise<any>
  {
    return this.httpPostJson('card/boardingpass/checkin', params);
  }

}
