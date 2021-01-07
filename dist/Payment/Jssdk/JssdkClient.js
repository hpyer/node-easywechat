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
const JssdkClient_1 = __importDefault(require("../../BaseService/Jssdk/JssdkClient"));
const Utils_1 = require("../../Core/Utils");
const BaseAccessToken_1 = require("../../Core/BaseAccessToken");
class JssdkClient extends JssdkClient_1.default {
    /**
     * 生成支付 JS 配置（WeixinJSBridge方式）
     * @param prepayId 通过统一下单（unify）接口获取
     * @param json 是否返回json字符串，默认：true
     */
    bridgeConfig(prepayId, json = true) {
        let params = {
            appId: this.app.config.sub_appid ? this.app.config.sub_appid : this.app.config.app_id,
            timeStamp: Utils_1.getTimestamp() + '',
            nonceStr: Utils_1.randomString(16),
            package: `prepay_id=${prepayId}`,
            signType: 'MD5',
        };
        params['paySign'] = Utils_1.makeSignature(params, this.app.config.key, 'md5');
        return json ? JSON.stringify(params) : params;
    }
    /**
     * 生成支付 JS 配置（JSSDK方式）
     * @param prepayId 通过统一下单（unify）接口获取
     */
    sdkConfig(prepayId) {
        let config = this.bridgeConfig(prepayId, false);
        config['timestamp'] = config['timeStamp'];
        delete config['timeStamp'];
        return config;
    }
    /**
     * 生成 APP 支付配置
     * @param prepayId 通过统一下单（unify）接口获取
     */
    appConfig(prepayId) {
        let params = {
            appid: this.app.config.app_id,
            partnerid: this.app.config.mch_id,
            prepayid: prepayId,
            noncestr: Utils_1.randomString(16),
            timestamp: Utils_1.getTimestamp() + '',
            package: 'Sign=WXPay',
        };
        params['sign'] = Utils_1.makeSignature(params, this.app.config.key, 'md5');
        return params;
    }
    /**
     * 生成共享收货地址 JS 配置
     * @param accessToken OAuth授权后的AccessToken
     * @param json 是否返回json字符串，默认：true
     */
    shareAddressConfig(accessToken, json = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (accessToken instanceof BaseAccessToken_1.AccessToken) {
                accessToken = accessToken.getToken();
            }
            let params = {
                appId: this.app.config.app_id,
                scope: 'jsapi_address',
                timeStamp: Utils_1.getTimestamp() + '',
                nonceStr: Utils_1.randomString(16),
                signType: 'SHA1',
            };
            let signParams = {
                appId: params['appId'],
                url: this.getUrl(),
                timestamp: params['timeStamp'],
                noncestr: params['nonceStr'],
                accesstoken: '' + accessToken,
            };
            params['addrSign'] = Utils_1.makeSignature(signParams, '', 'sha1');
            return json ? JSON.stringify(params) : params;
        });
    }
}
exports.default = JssdkClient;
