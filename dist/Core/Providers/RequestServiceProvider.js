'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServiceProvider_1 = require("../BaseServiceProvider");
const BaseRequest_1 = require("../Http/BaseRequest");
class RequestServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['request'] = new BaseRequest_1.default;
    }
}
exports.default = RequestServiceProvider;
;
