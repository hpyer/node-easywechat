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
    getTicket(refresh = false, type = 'wx_card') {
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
    assign(cards) {
        return __awaiter(this, void 0, void 0, function* () {
            let items = [];
            for (let i = 0; i < cards.length; i++) {
                items.push(yield this.attachExtension(cards[i]['card_id'], cards[i]));
            }
            return JSON.stringify(items);
        });
    }
    attachExtension(cardId, extension = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let timestamp = Utils_1.getTimestamp();
            let nonce_str = Utils_1.randomString(6);
            let ticket = yield this.getTicket()['ticket'];
            let ext = {
                timestamp,
                nonce_str,
                code: extension['code'] || '',
                openid: extension['openid'] || '',
                outer_id: extension['outer_id'] || '',
                balance: extension['balance'] || '',
                fixed_begintimestamp: extension['fixed_begintimestamp'] || '',
                outer_str: extension['outer_str'] || '',
            };
            ext['signature'] = this.dictionaryOrderSignature([ticket, timestamp, cardId, ext['code'] || '', ext['openid'] || '', nonce_str]);
            return {
                cardId,
                cardExt: JSON.stringify(ext),
            };
        });
    }
}
exports.default = JssdkClient;
