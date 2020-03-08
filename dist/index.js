'use strict';
const Utils_1 = require("./Core/Utils");
const EasyWechat = {};
EasyWechat['Factory'] = {
    getInstance: function (service, config = {}) {
        try {
            service = Utils_1.strStudly(service);
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
    FinallResult: require('./Core/Decorators/FinallResult')['default'],
    TerminateResult: require('./Core/Decorators/TerminateResult')['default'],
};
EasyWechat['Http'] = {
    Request: require('./Core/Http/Request')['default'],
    Response: require('./Core/Http/Response')['default'],
    StreamResponse: require('./Core/Http/StreamResponse')['default'],
};
EasyWechat['Message'] = require('./Core/Messages');
module.exports = EasyWechat;
