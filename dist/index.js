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
EasyWechat['CacheInterface'] = require('./Core/Contracts/CacheInterface')['default'];
EasyWechat['Decorator'] = {
    FinallResult: require('./Core/Http/FinallResult')['default'],
    TerminateResult: require('./Core/Http/TerminateResult')['default'],
};
EasyWechat['Http'] = {
    Request: require('./Core/Http/Request')['default'],
    Response: require('./Core/Http/Response')['default'],
    StreamResponse: require('./Core/Http/StreamResponse')['default'],
};
EasyWechat['Message'] = require('./Core/Messages');
module.exports = EasyWechat;
