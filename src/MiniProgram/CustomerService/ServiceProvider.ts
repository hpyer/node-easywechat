'use strict';

import Client from '../../OfficialAccount/CustomerService/Client';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['customer_service'] = new Client(app);
  }
};
