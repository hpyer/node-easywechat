'use strict';
const EasyWechat = {};
EasyWechat['Factory'] = {
    getInstance: function (service, config = {}) {
        try {
            let applicationClass = require('./' + service + '/Application')['default'];
            return new applicationClass(config);
        }
        catch (e) {
            console.log(e);
        }
    },
};
EasyWechat['BaseCache'] = require('./Core/Cache/BaseCache')['default'];
EasyWechat['BaseRequest'] = require('./Core/Http/Request')['default'];
EasyWechat['Messages'] = require('./Core/Messages');
module.exports = EasyWechat;
