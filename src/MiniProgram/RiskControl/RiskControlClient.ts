'use strict';

import BaseClient from '../../Core/BaseClient';

export default class RiskControlClient extends BaseClient {

  getUserRiskRank(params: object): Promise<any> {
    return this.httpPostJson('wxa/getuserriskrank', params);
  }

}
