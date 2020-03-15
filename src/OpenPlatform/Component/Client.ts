'use strict';

import BaseClient from '../../Core/BaseClient';

export default class Client extends BaseClient
{

  registerMiniProgram(params: object): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/fastregisterweapp', params, {
      action: 'create',
    });
  }

  getRegistrationStatus(companyName: string, legalPersonaWechat: string, legalPersonaName: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/component/fastregisterweapp', {
      name: companyName,
      legal_persona_wechat: legalPersonaWechat,
      legal_persona_name: legalPersonaName,
    }, {
      action: 'search',
    });
  }

}
