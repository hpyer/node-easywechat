'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("./Card");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['card'] = new Card_1.default(app);
    }
}
exports.default = ServiceProvider;
;
