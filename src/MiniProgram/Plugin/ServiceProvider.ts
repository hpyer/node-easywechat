'use strict';

import Client from './Client';
import DevClient from './DevClient';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['plugin'] = new Client(app);

    app['plugin_dev'] = new DevClient(app);
  }
};
