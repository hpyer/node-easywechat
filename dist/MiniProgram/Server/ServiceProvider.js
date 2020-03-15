'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Guard_1 = require("../../OfficialAccount/Server/Guard");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
const Encryptor_1 = require("../Encryptor");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        if (!app['encryptor']) {
            app.offsetSet('encryptor', function (app) {
                return new Encryptor_1.default(app['config']['app_id'], app['config']['token'], app['config']['aes_key']);
            });
        }
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
