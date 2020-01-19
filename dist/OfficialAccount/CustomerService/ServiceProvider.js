'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const SessionClient_1 = require("./SessionClient");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['customer_service'] = new Client_1.default(app);
        app['customer_service_session'] = new SessionClient_1.default(app);
    }
}
exports.default = ServiceProvider;
;
