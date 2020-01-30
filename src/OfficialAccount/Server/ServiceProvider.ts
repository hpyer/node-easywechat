'use strict';

import Guard from './Guard';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';
import FinallResult from '../../Core/Decorators/FinallResult';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    if (!app['server']) {
      app['server'] = new Guard(app);
      app['server'].push(async function () {
        let str = await app['request'].get('echostr');
        if (str) {
          return new FinallResult(str);
        }
      });
    }
  }
};
