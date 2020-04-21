'use strict';

import { strStudly } from './Core/Utils';

const EasyWechat = {};

EasyWechat['Factory'] = {
  OfficialAccount: require('./OfficialAccount/Application')['default'],
  BasicService: require('./BasicService/Application')['default'],
  MiniProgram: require('./MiniProgram/Application')['default'],
  OpenPlatform: require('./OpenPlatform/Application')['default'],
  Payment: require('./Payment/Application')['default'],

  getInstance: function (service, config = {}): any
  {
    try {
      service = strStudly(service);
      let applicationClass = require('./' + service + '/Application')['default'];
      return new applicationClass(config);
    }
    catch (e) {
      console.log(e)
    }
  },
};

EasyWechat['CacheInterface'] = require('./Core/Contracts/CacheInterface')['default'];
EasyWechat['Decorator'] = {
  FinallResult: require('./Core/Decorators/FinallResult')['default'],
  TerminateResult: require('./Core/Decorators/TerminateResult')['default'],
};
EasyWechat['Http'] = {
  Request: require('./Core/Http/Request')['default'],
  Response: require('./Core/Http/Response')['default'],
  StreamResponse: require('./Core/Http/StreamResponse')['default'],
};
EasyWechat['Message'] = require('./Core/Messages');

export = EasyWechat;
