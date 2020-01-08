'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const OAuth_1 = require("./OAuth");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['oauth'] = new OAuth_1.default(app);
    }
}
exports.default = ServiceProvider;
;
