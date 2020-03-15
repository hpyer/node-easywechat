'use strict';

import Guard from './Guard';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';
import FinallResult from '../../Core/Decorators/FinallResult';
import Encryptor from '../../Core/Encryptor';

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

      app['server'].push(async function (payload) {
        let str = await this.app['request'].get('echostr');
        if (str) {
          return new FinallResult(str);
        }
      });
    }
  }
};
