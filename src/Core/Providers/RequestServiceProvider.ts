'use strict';

import BaseApplication from '../BaseApplication';
import BaseServiceProvider from '../BaseServiceProvider';
import BaseRequest from '../Http/BaseRequest';

export default class RequestServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['request'] = new BaseRequest;
  }

};
