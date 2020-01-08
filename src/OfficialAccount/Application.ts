'use strict';

import BaseApplication from '../Core/BaseApplication';

export default class Application extends BaseApplication
{
  protected defaultConfig: object = {
    app_id: '',
    secret: '',
    oauth: {
      scope: 'snsapi_userinfo',
      callback: '',
    },
  };

  constructor(config = {})
  {
    super(config);

    let providers = [
      'OfficialAccount/Auth',
      'OfficialAccount/Server',
      'OfficialAccount/User',
      'OfficialAccount/OAuth',
      'OfficialAccount/Menu',
      'OfficialAccount/TemplateMessage',
      'OfficialAccount/Material',
      'OfficialAccount/POI',
      'OfficialAccount/AutoReply',
      'OfficialAccount/Comment',
      'OfficialAccount/Base',
      'OfficialAccount/OCR',
      'OfficialAccount/Goods',

      // BaseService
      'BaseService/Jssdk',
      'BaseService/Media',
      'BaseService/Qrcode',
      'BaseService/Url',
    ];
    super.registerProviders(providers);
  }
};
