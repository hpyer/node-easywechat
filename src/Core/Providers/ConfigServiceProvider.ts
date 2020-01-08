'use strict';

import BaseApplication from '../BaseApplication';
import BaseServiceProvider from '../BaseServiceProvider';

export default class ConfigServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['config'] = app.getConfig();
  }

};
