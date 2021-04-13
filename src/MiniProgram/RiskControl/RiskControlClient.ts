'use strict';

import BaseClient from '../../Core/BaseClient';

export default class RiskControlClient extends BaseClient {

  getUserRiskRank(params: object): Promise<any> {
    return this.httpPost('wxa/getuserriskrank', params);
  }

}
