'use strict';

import AccessToken from './AccessToken';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    if (!app['access_token']) {
      app['access_token'] = new AccessToken(app);
    }
  }
};
