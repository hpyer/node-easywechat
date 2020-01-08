'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const UserClient_1 = require("./UserClient");
const TagClient_1 = require("./TagClient");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['user'] = new UserClient_1.default(app);
        app['user_tag'] = new TagClient_1.default(app);
    }
}
exports.default = ServiceProvider;
;
