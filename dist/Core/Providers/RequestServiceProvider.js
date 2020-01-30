'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServiceProvider_1 = require("../BaseServiceProvider");
const Request_1 = require("../Http/Request");
class RequestServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['request'] = new Request_1.default;
    }
}
exports.default = RequestServiceProvider;
;
