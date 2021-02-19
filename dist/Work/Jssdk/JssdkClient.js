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
class JssdkClient extends JssdkClient_1.default {
    constructor() {
        super(...arguments);
        this.ticketEndpoint = 'https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket';
    }
    getAppId() {
        return this.app.config.corp_id;
    }
    getAgentConfigArray(apis, agentId, debug = false, beta = false, openTagList = [], url = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return this.buildAgentConfig(apis, agentId, debug, beta, false, openTagList, url);
        });
    }
    buildAgentConfig(jsApiList, agentId, debug = false, beta = false, json, openTagList = [], url = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let config = Utils_1.merge({
                debug,
                beta,
                jsApiList,
                openTagList,
            }, yield this.agentConfigSignature(agentId, url));
            return json ? JSON.stringify(config) : config;
        });
    }
    agentConfigSignature(agentId, url = '', nonce = '', timestamp = '') {
        return __awaiter(this, void 0, void 0, function* () {
            url = url || this.getUrl();
            nonce = nonce || Utils_1.randomString(10);
            timestamp = timestamp || Utils_1.getTimestamp() + '';
            let ticket = yield this.getAgentTicket(agentId);
            return {
                corpid: this.getAppId(),
                agentid: agentId,
                nonceStr: nonce,
                timestamp: timestamp,
                url: url,
                signature: this.getTicketSignature(ticket['ticket'], nonce, timestamp, url),
            };
        });
    }
    /**
     * 获取代理签名凭证api_ticket
     * @param refresh 是否强制刷新
     * @param type 类型，默认：jsapi
     */
    getAgentTicket(agentId, refresh = false, type = 'agent_config') {
        return __awaiter(this, void 0, void 0, function* () {
            let cacheKey = `easywechat.work.jssdk.ticket.${agentId}.${type}.${this.getAppId()}`;
            let cacher = this.app.getCache();
            if (!refresh && (yield cacher.has(cacheKey))) {
                let ticket = yield cacher.get(cacheKey);
                if (ticket)
                    return ticket;
            }
            let res = yield this.request({
                url: 'cgi-bin/ticket/get',
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
    /**
     * 获取签名凭证api_ticket
     * @param refresh 是否强制刷新
     * @param type 类型，默认：jsapi
     */
    getTicket(refresh = false, type = 'config') {
        return __awaiter(this, void 0, void 0, function* () {
            let cacheKey = `easywechat.work.jssdk.ticket.${type}.${this.getAppId()}`;
            let cacher = this.app.getCache();
            if (!refresh && (yield cacher.has(cacheKey))) {
                let ticket = yield cacher.get(cacheKey);
                if (ticket)
                    return ticket;
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
}
exports.default = JssdkClient;
