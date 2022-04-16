'use strict';

import OpenWorkApplication from '../Application';
import BaseApplication from '../../Work/Application';
import AccessToken from './Auth/AccessToken';
import { merge } from '../../Core/Utils';

export default class Work extends BaseApplication
{
  constructor(authCorpId: string, permanentCode: string, component: OpenWorkApplication, prepends: Object = {})
  {
    let config: object = merge(merge({}, component.getConfig()), {
      corp_id: authCorpId,
    });
    super(config, merge(merge({}, prepends), {
      access_token: function (app) {
        return new AccessToken(app, authCorpId, permanentCode, component);
      }
    }));
  }

};
