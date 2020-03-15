'use strict';

import VerifyTicket from './VerifyTicket';
import AccessToken from './AccessToken';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['verify_ticket'] = new VerifyTicket(app);

    app['access_token'] = new AccessToken(app);
  }
};
