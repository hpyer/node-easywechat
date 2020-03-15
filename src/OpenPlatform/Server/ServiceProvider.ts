'use strict';

import Guard from './Guard';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';
import Encryptor from '../../Core/Encryptor';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app.offsetSet('encryptor', function (app) {
      return new Encryptor(app['config']['app_id'], app['config']['token'], app['config']['aes_key']);
    });

    app['server'] = new Guard(app);
  }
};
