'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const AccessToken_1 = require("./AccessToken");
const Client_1 = require("./Client");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        if (!app['access_token']) {
            app['access_token'] = new AccessToken_1.default(app);
        }
        if (!app['auth']) {
            app['auth'] = new Client_1.default(app);
        }
    }
}
exports.default = ServiceProvider;
;
