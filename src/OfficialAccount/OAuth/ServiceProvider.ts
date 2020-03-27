'use strict';

import OAuth from './OAuth';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    if (!app['oauth']) {
      app['oauth'] = new OAuth(app);
    }
  }
};
