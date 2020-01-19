'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Guard_1 = require("../../OfficialAccount/Server/Guard");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        if (!app['server']) {
            app['server'] = new Guard_1.default(app);
            app['server'].push(function () {
                let str = app['request'].get('echostr');
                if (str) {
                    return str;
                }
            });
        }
    }
}
exports.default = ServiceProvider;
;
