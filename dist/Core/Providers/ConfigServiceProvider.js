'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServiceProvider_1 = require("../BaseServiceProvider");
class ConfigServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['config'] = app.getConfig();
    }
}
exports.default = ConfigServiceProvider;
;
