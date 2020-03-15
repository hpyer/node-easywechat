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

  constructor(config: Object = {}, prepends: Object = {}, id: String = null)
  {
    super(config, prepends, id);

    let providers = [
      'OfficialAccount/Auth',
      'OfficialAccount/Server',
      'OfficialAccount/User',
      'OfficialAccount/OAuth',
      'OfficialAccount/Menu',
      'OfficialAccount/TemplateMessage',
      'OfficialAccount/Material',
      'OfficialAccount/CustomerService',
      'OfficialAccount/Semantic',
      'OfficialAccount/DataCube',
      'OfficialAccount/POI',
      'OfficialAccount/AutoReply',
      'OfficialAccount/Broadcasting',
      'OfficialAccount/Card',
      'OfficialAccount/Device',
      'OfficialAccount/ShakeAround',
      'OfficialAccount/Store',
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


  // map to `base` module
  clearQuota(): Promise<any>
  {
    return this['base'].clearQuota.apply(this, arguments);
  }
  getValidIps(): Promise<any>
  {
    return this['base'].getValidIps.apply(this, arguments);
  }
  checkCallbackUrl(): Promise<any>
  {
    return this['base'].checkCallbackUrl.apply(this, arguments);
  }
};
