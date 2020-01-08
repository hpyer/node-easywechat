'use strict';

import BaseApplication from '../Core/BaseApplication';

export default class Application extends BaseApplication
{
  protected defaultConfig: object = {
    app_id: '',
    secret: '',
  };

  constructor(config: object = {})
  {
    super(config);

    let providers = [
      'BaseService/Jssdk',
      'BaseService/Qrcode',
      'BaseService/Media',
      'BaseService/Url',
      'BaseService/ContentSecurity',
    ];
    super.registerProviders(providers);
  }
};
