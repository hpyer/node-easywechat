'use strict';

import BaseApplication from '../BaseApplication';
import BaseServiceProvider from '../BaseServiceProvider';

export default class LogServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['log'] = function () {
      let args = arguments;
      args[0] = 'NodeEasywechat2: ' + args[0];
      return console.log.apply(null, arguments);
    };
  }

};
