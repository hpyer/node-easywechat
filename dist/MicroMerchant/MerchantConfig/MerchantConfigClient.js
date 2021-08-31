'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../../Core/Utils");
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
class MerchantConfigClient extends BaseClient_1.default {
    setFollowConfig(subAppId, subscribeAppId, receiptAppId = '', subMchId = '') {
        let params = {
            sub_appid: subAppId,
            sub_mch_id: subMchId || this.app.config.sub_mch_id,
            sign_type: 'HMAC-SHA256',
            nonce_str: Utils_1.randomString(18),
        };
        if (subscribeAppId) {
            params['subscribe_appid'] = subscribeAppId;
        }
        else {
            params['receipt_appid'] = receiptAppId;
        }
        return this.safeRequest('secapi/mkt/addrecommendconf', params);
    }
    addPath(jsapiPath, appId = '', subMchId = '') {
        return this.addConfig({
            appid: appId || this.app.config.appid,
            sub_mch_id: subMchId || this.app.config.sub_mch_id,
            jsapi_path: jsapiPath,
        });
    }
    bindAppId(subAppId, appId = '', subMchId = '') {
        return this.addConfig({
            appid: appId || this.app.config.appid,
            sub_mch_id: subMchId || this.app.config.sub_mch_id,
            sub_appid: subAppId,
        });
    }
    addConfig(params) {
        return this.safeRequest('secapi/mch/addsubdevconfig', params);
    }
    getConfig(subMchId, appId) {
        let params = {
            sub_mch_id: subMchId || this.app.config.sub_mch_id,
            appid: appId || this.app.config.appid,
        };
        return this.safeRequest('secapi/mch/querysubdevconfig', params);
    }
}
exports.default = MerchantConfigClient;
