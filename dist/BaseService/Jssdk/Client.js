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
const Merge = require("merge");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.url = '';
        this.ticketEndpoint = 'cgi-bin/ticket/getticket';
    }
    getTicket(refresh = false, type = 'jsapi') {
        return __awaiter(this, void 0, void 0, function* () {
            let cacheKey = `easywechat.basic_service.jssdk.ticket.${type}.${this.getAppId()}`;
            let cacher = this.app.getCache();
            if (!refresh && (yield cacher.has(cacheKey))) {
                return yield cacher.get(cacheKey);
            }
            let res = yield this.request({
                url: this.ticketEndpoint,
                method: 'get',
                qs: {
                    type,
                },
            });
            yield cacher.set(cacheKey, res, res['expires_in'] - 500);
            if (!cacher.has(cacheKey)) {
                throw new Error('Failed to cache jssdk ticket.');
            }
            return res;
        });
    }
    buildConfig(jsApiList, debug = false, beta = false, json = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = Merge({
                jsApiList, debug, beta
            }, yield this.configSignature());
            return json ? JSON.stringify(config) : config;
        });
    }
    configSignature(url = '', nonce = '', timestamp = '') {
        return __awaiter(this, void 0, void 0, function* () {
            url = url || this.getUrl();
            nonce = nonce || Utils_1.randomString(10);
            timestamp = timestamp || Utils_1.getTimestamp() + '';
            let ticket = yield this.getTicket();
            return {
                appId: this.getAppId(),
                nonceStr: nonce,
                timestamp: timestamp,
                url: url,
                signature: this.getTicketSignature(ticket['ticket'], nonce, timestamp, url),
            };
        });
    }
    getTicketSignature(ticket, nonce, timestamp, url) {
        return Utils_1.createHash(`jsapi_ticket=${ticket}&noncestr=${nonce}&timestamp=${timestamp}&url=${url}`, 'sha1');
    }
    dictionaryOrderSignature(args) {
        let params = [];
        for (let i in args) {
            params.push(args[i]);
        }
        params.sort();
        return Utils_1.createHash(params.join(''), 'sha1');
    }
    setUrl(url) {
        this.url = url;
        return this;
    }
    getUrl() {
        return this.url;
    }
    getAppId() {
        return this.app['config']['app_id'];
    }
}
exports.default = Client;
