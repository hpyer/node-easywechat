'use strict';

import BaseClient from '../../Core/BaseClient';
import { buildQueryString, randomString } from '../../Core/Utils';

export default class MiniProgramClient extends BaseClient
{

  constructor(app)
  {
    super(app, app['suite_access_token']);
  }

  session(code: string): Promise<any>
  {
    return this.httpGet('cgi-bin/service/miniprogram/jscode2session', {
      js_code: code,
      grant_type: 'authorization_code',
    });
  }

}
