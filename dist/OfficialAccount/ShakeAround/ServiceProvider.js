'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const ShakeAround_1 = require("./ShakeAround");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['shake_around'] = new ShakeAround_1.default(app);
    }
}
exports.default = ServiceProvider;
;
