'use strict';

import AccessToken from './AccessToken';
import Client from './Client';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    if (!app['access_token']) {
      app['access_token'] = new AccessToken(app);
    }
    if (!app['auth']) {
      app['auth'] = new Client(app);
    }
  }
};
