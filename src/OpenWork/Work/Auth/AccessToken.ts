'use strict';

import BaseAccessToken from '../../../Core/BaseAccessToken';
import OpenWorkApplication from '../../Application';
import BaseApplicatioin from '../../../Core/BaseApplication';
import { buildQueryString } from '../../../Core/Utils';

export default class AccessToken extends BaseAccessToken
{
  protected requestMethod: string = 'POST';
  protected authCorpId: string = '';
  protected permanentCode: string = '';
  protected component: OpenWorkApplication = null;

  constructor(app: BaseApplicatioin, authCorpId: string, permanentCode: string, component: OpenWorkApplication)
  {
    super(app);

    this.authCorpId = authCorpId;
    this.permanentCode = permanentCode;
    this.component = component;
  }

  protected async getCredentials(): Promise<object>
  {
    return {
      auth_corpid: this.authCorpId,
      permanent_code: this.permanentCode,
    };
  }

  async getEndpoint(): Promise<string>
  {
    return 'cgi-bin/service/get_corp_token?' + buildQueryString({
      suite_access_token: (await this.component['suite_access_token'].getToken())['suite_access_token'],
    });
  }
}
