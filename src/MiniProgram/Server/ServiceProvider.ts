'use strict';

import Guard from '../../OfficialAccount/Server/Guard';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';
import Encryptor from '../Encryptor';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    if (!app['encryptor']) {
      app.offsetSet('encryptor', function (app) {
        return new Encryptor(app['config']['app_id'], app['config']['token'], app['config']['aes_key']);
      });
    }

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
