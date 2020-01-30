'use strict';

import BaseApplication from '../BaseApplication';
import BaseServiceProvider from '../BaseServiceProvider';
import Request from '../Http/Request';

export default class RequestServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['request'] = new Request;
  }

};
