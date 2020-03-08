'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['subscribe_message'] = new Client_1.default(app);
    }
}
exports.default = ServiceProvider;
;
