'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Guard_1 = require("./Guard");
const BaseServiceProvider_1 = require("../../Core/BaseServiceProvider");
const FinallResult_1 = require("../../Core/Decorators/FinallResult");
const Encryptor_1 = require("../../Core/Encryptor");
class ServiceProvider extends BaseServiceProvider_1.default {
    static register(app) {
        if (!app['encryptor']) {
            app.offsetSet('encryptor', function (app) {
                return new Encryptor_1.default(app['config']['app_id'], app['config']['token'], app['config']['aes_key']);
            });
        }
        if (!app['server']) {
            app['server'] = new Guard_1.default(app);
            app['server'].push(function (payload) {
                return __awaiter(this, void 0, void 0, function* () {
                    let str = yield this.app['request'].get('echostr');
                    if (str) {
                        return new FinallResult_1.default(str);
                    }
                });
            });
        }
    }
}
exports.default = ServiceProvider;
;
