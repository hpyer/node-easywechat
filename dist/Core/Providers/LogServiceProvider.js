'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServiceProvider_1 = require("../BaseServiceProvider");
class LogServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['log'] = function () {
            let args = arguments;
            args[0] = 'NodeEasywechat2: ' + args[0];
            return console.log.apply(null, arguments);
        };
    }
}
exports.default = LogServiceProvider;
;
