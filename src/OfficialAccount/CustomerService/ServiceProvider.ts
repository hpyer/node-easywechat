'use strict';

import Client from './Client';
import SessionClient from './SessionClient';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['customer_service'] = new Client(app);

    app['customer_service_session'] = new SessionClient(app);
  }
};
