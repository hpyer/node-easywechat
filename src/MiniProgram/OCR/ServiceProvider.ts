'use strict';

import Client from '../../OfficialAccount/OCR/Client';
import BaseServiceProvider from '../../Core/BaseServiceProvider';
import BaseApplication from '../../Core/BaseApplication';

export default class ServiceProvider extends BaseServiceProvider
{
  static register(app: BaseApplication): void
  {
    app['ocr'] = new Client(app);
  }
};
