'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Guard_1 = require("./Guard");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
const Encryptor_1 = require("../../Core/Encryptor");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app.offsetSet('encryptor', function (app) {
            return new Encryptor_1.default(app['config']['app_id'], app['config']['token'], app['config']['aes_key']);
        });
        app['server'] = new Guard_1.default(app);
    }
}
exports.default = ServiceProvider;
;
