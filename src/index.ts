'use strict';

const EasyWechat = {};

EasyWechat['Factory'] = {
  getInstance: function (service, config = {}): void
  {
    try {
      let applicationClass = require('./' + service + '/Application')['default'];
      return new applicationClass(config);
    }
    catch (e) {
      console.log(e)
    }
  },
};

EasyWechat['BaseCache'] = require('./Core/Cache/BaseCache')['default'];

export = EasyWechat;
