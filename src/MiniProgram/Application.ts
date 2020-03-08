'use strict';

import BaseApplication from '../Core/BaseApplication';

export default class Application extends BaseApplication
{

  constructor(config = {})
  {
    super(config);

    let providers = [
      'MiniProgram/Auth',
      'MiniProgram/DataCube',
      'MiniProgram/AppCode',
      'MiniProgram/Server',
      'MiniProgram/TemplateMessage',
      'MiniProgram/CustomerService',
      'MiniProgram/UniformMessage',
      'MiniProgram/ActivityMessage',
      'MiniProgram/OpenData',
      'MiniProgram/Plugin',
      'MiniProgram/Base',
      'MiniProgram/Express',
      'MiniProgram/NearbyPoi',
      'MiniProgram/OCR',
      'MiniProgram/Soter',
      'MiniProgram/SubscribeMessage',
      'MiniProgram/RealtimeLog',
      'MiniProgram/Search',

      // BaseService
      'BaseService/Media',
      'BaseService/ContentSecurity',
    ];
    super.registerProviders(providers);
  }

  getPaidUnionid(openid: string, optional: object = {}): Promise<any>
  {
    return this['base'].getPaidUnionid(openid, optional);
  }

};
