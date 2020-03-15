'use strict';

import Client from './Client';
import BaseServiceProvider from '../../../../Core/BaseServiceProvider';
import BaseApplication from '../../../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['tester'] = new Client(app);
  }
};
