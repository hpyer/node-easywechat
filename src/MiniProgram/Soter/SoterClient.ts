'use strict';

import BaseClient from '../../Core/BaseClient';

export default class SoterClient extends BaseClient
{

  verifySignature(openid: string, json: string, signature: string): Promise<any>
  {
    return this.httpPostJson('cgi-bin/soter/verify_signature', {
      openid: openid,
      json_string: json,
      json_signature: signature,
    });
  }

}
