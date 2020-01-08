'use strict';

import UserClient from './UserClient';
import TagClient from './TagClient';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['user'] = new UserClient(app);
    app['user_tag'] = new TagClient(app);
  }
};
