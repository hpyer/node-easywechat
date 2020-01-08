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
const BaseClient_1 = require("../../Core/BaseClient");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.url = '';
        this.endpoint = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket';
    }
    setUrl(url) {
        this.url = url;
    }
    getTicket(force = false, type = 'jsapi') {
        return __awaiter(this, void 0, void 0, function* () {
            let cacheKey = `node-easywechat.access_token.${type}.${this.getAppId()}`;
            let jssdkTicket = yield this.app.getCache().fetch(cacheKey);
            if (force || !jssdkTicket) {
                let res = yield this.requestWithAccessToken({
                    url: this.endpoint,
                    method: 'get',
                    qs: {
                        type,
                    },
                });
                yield this.app.getCache().save(cacheKey, res.ticket, res.expires_in - 500);
                jssdkTicket = res.ticket;
            }
            return jssdkTicket;
        });
    }
    buildConfig(APIs, debug = false, beta = false, json = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let jssdkTicket = yield this.getTicket();
            let noncestr = Utils_1.randomString();
            let timestamp = Utils_1.getTimestamp();
            let signature = Utils_1.makeSignature({
                jsapi_ticket: jssdkTicket,
                noncestr,
                timestamp,
                url: this.url,
            });
            let config = {
                appId: this.getAppId(),
                beta,
                debug,
                jsApiList: APIs,
                nonceStr: noncestr,
                signature,
                timestamp,
                url: this.url,
            };
            /* 使用完清空设置的url */
            this.url = '';
            return json ? JSON.stringify(config) : config;
        });
    }
    getAppId() {
        return this.app['config']['app_id'];
    }
}
exports.default = Client;
