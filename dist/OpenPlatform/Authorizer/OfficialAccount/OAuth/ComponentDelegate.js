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
const OAuthClient_1 = require("../../../../OfficialAccount/OAuth/OAuthClient");
class ComponentDelegate extends OAuthClient_1.OAuthComponent {
    constructor(app) {
        super();
        this.app = null;
        this.app = app;
    }
    /**
     * 获取配置中的app_id
     */
    getAppId() {
        return this.app.config.app_id;
    }
    /**
     * 获取授权后的token
     */
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.app.access_token.getToken())['component_access_token'];
        });
    }
}
exports.default = ComponentDelegate;
