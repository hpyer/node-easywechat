'use strict';

import Guard from '../../OfficialAccount/Server/Guard';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    if (!app['server']) {
      app['server'] = new Guard(app);
      app['server'].push(function () {
        let str = app['request'].get('echostr');
        if (str) {
          return str;
        }
      });
    }
  }
};
