'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const DevClient_1 = require("./DevClient");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['plugin'] = new Client_1.default(app);
        app['plugin_dev'] = new DevClient_1.default(app);
    }
}
exports.default = ServiceProvider;
;
