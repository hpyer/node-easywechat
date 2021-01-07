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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../../../Core/BaseClient"));
class Client extends BaseClient_1.default {
    constructor(app, component) {
        super(app);
        this.component = null;
        this.component = component;
    }
    /**
     * 小程序登录，jscode换取session_key
     * @param code wx.login 获取的 code
     */
    session(code) {
        return __awaiter(this, void 0, void 0, function* () {
            let access_token = (yield this.component.access_token.getToken())['component_access_token'];
            return this.httpGet('sns/component/jscode2session', {
                appid: this.app.config.app_id,
                js_code: code,
                grant_type: 'authorization_code',
                component_appid: this.component.config.app_id,
                component_access_token: access_token,
            });
        });
    }
}
exports.default = Client;
