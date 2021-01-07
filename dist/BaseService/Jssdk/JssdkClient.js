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
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.url = '';
        this.ticketEndpoint = 'cgi-bin/ticket/getticket';
    }
    /**
     * 获取签名凭证api_ticket
     * @param refresh 是否强制刷新
     * @param type 类型，默认：jsapi
     */
    getTicket(refresh = false, type = 'jsapi') {
        return __awaiter(this, void 0, void 0, function* () {
            let cacheKey = `easywechat.basic_service.jssdk.ticket.${type}.${this.getAppId()}`;
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
    /**
     * 获取JSSDK的配置
     * @param {Array<string>} jsApiList API列表
     * @param {Boolean} debug 是否调试模式，默认：false
     * @param {Boolean} beta 是否测试模式，默认：false
     * @param {Boolean} json true时返回JSON字符串，默认：true
     * @param {Array<string>} openTagList 开放标签列表，默认：[]
     * @param {string} url 请求URL，默认：当前URL
     */
    buildConfig(jsApiList, debug = false, beta = false, json = true, openTagList = [], url = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let config = Utils_1.merge({
                jsApiList, debug, beta, openTagList
            }, yield this.configSignature(url));
            return json ? JSON.stringify(config) : config;
        });
    }
    /**
     * 获取JSSDK的配置对象
     * @param {Array<string>} jsApiList API列表
     * @param {Boolean} debug 是否调试模式，默认：false
     * @param {Boolean} beta 是否测试模式，默认：false
     * @param {Array<string>} openTagList 开放标签列表，默认：[]
     * @param {string} url 请求URL，默认：当前URL
     */
    getConfigArray(jsApiList, debug = false, beta = false, openTagList = [], url = '') {
        return this.buildConfig(jsApiList, debug, beta, false, openTagList, url);
    }
    /**
     * 获取签名配置
     * @param {string} url 完整的URL地址
     * @param {string} nonce 随机字符串，默认：随机10位
     * @param {string} timestamp 时间戳，默认：当前时间
     */
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
    /**
     * 设置当前URL
     * @param {string} url 完整的URL地址
     */
    setUrl(url) {
        this.url = url;
        return this;
    }
    /**
     * 获取当前设置的URL
     */
    getUrl() {
        return this.url;
    }
    /**
     * 获取配置中的app_id
     */
    getAppId() {
        return this.app.config.app_id;
    }
}
exports.default = Client;
