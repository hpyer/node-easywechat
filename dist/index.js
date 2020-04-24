'use strict';
const Utils_1 = require("./Core/Utils");
const EasyWechat = {};
EasyWechat['Factory'] = {
    OfficialAccount: require('./OfficialAccount/Application')['default'],
    BaseService: require('./BaseService/Application')['default'],
    MiniProgram: require('./MiniProgram/Application')['default'],
    OpenPlatform: require('./OpenPlatform/Application')['default'],
    Payment: require('./Payment/Application')['default'],
    getInstance: function (service, config = {}) {
        try {
            service = Utils_1.strStudly(service);
            let applicationClass = this[service];
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
