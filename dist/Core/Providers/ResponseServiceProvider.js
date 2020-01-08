'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServiceProvider_1 = require("../BaseServiceProvider");
class ResponseServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        app['response'] = {
            sendContent() {
                throw new Error('未设置响应对象');
            }
        };
    }
}
exports.default = ResponseServiceProvider;
;
