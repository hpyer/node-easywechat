'use strict';

import ShakeAround from './ShakeAround';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['shake_around'] = new ShakeAround(app);
  }
};
