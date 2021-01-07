'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OAuthClient_1 = __importDefault(require("../../../../OfficialAccount/OAuth/OAuthClient"));
class Client extends OAuthClient_1.default {
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
        return this.app.access_token.getToken();
    }
}
exports.default = Client;
