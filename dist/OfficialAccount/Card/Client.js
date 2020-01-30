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
        this.ticketCachePrefix = 'easywechat.official_account.card.api_ticket.';
    }
    colors() {
        return this.httpGet('card/getcolors');
    }
    categories() {
        return this.httpGet('card/getapplyprotocol');
    }
    create(cardType = '', attributes) {
        return this.httpPostJson('card/create', {
            card: {
                card_type: cardType.toUpperCase(),
                [cardType.toLowerCase()]: attributes,
            }
        });
    }
    get(cardId = '') {
        return this.httpPostJson('card/get', {
            card_id: cardId
        });
    }
    list(offset = 0, count = 10, statusList = 'CARD_STATUS_VERIFY_OK') {
        return this.httpPostJson('card/batchget', {
            offset,
            count,
            status_list: statusList,
        });
    }
    update(cardId, type, attributes = {}) {
        return this.httpPostJson('card/update', {
            card_id: cardId,
            [type.toLowerCase()]: attributes,
        });
    }
    delete(cardId) {
        return this.httpPostJson('card/delete', {
            card_id: cardId,
        });
    }
    createQrCode(info) {
        return this.httpPostJson('card/qrcode/create', info);
    }
    getQrCode(ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            let baseUrl = 'https://mp.weixin.qq.com/cgi-bin/showqrcode';
            let params = {
                ticket,
            };
            let res = yield this.requestRaw({
                baseUrl: '',
                url: baseUrl,
                method: 'GET',
                qs: params,
            });
            return {
                status: res.getStatusCode(),
                headers: res.getHeaders(),
                body: res.getContent(),
                url: baseUrl + '?' + Utils_1.buildQueryString(params),
            };
        });
    }
    getQrCodeUrl(ticket) {
        return `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${ticket}`;
    }
    createLandingPage(banner, pageTitle, canShare, scene, cardList) {
        return this.httpPostJson('card/landingpage/create', {
            banner,
            page_title: pageTitle,
            can_share: canShare,
            scene,
            card_list: cardList,
        });
    }
    getHtml(cardId) {
        return this.httpPostJson('card/mpnews/gethtml', {
            card_id: cardId,
        });
    }
    setTestWhitelist(openids) {
        return this.httpPostJson('card/testwhitelist/set', {
            openid: openids,
        });
    }
    setTestWhitelistByName(usernames) {
        return this.httpPostJson('card/testwhitelist/set', {
            username: usernames,
        });
    }
    getUserCards(openid, cardId = '') {
        return this.httpPostJson('card/user/getcardlist', {
            openid,
            card_id: cardId,
        });
    }
    setPayCell(cardId, isOpen = true) {
        return this.httpPostJson('card/paycell/set', {
            card_id: cardId,
            is_open: isOpen,
        });
    }
    increaseStock(cardId, amount) {
        return this.updateStock(cardId, amount, 'increase');
    }
    reduceStock(cardId, amount) {
        return this.updateStock(cardId, amount, 'reduce');
    }
    updateStock(cardId, amount, action = 'increase') {
        let key = 'increase' === action ? 'increase_stock_value' : 'reduce_stock_value';
        return this.httpPostJson('card/modifystock', {
            card_id: cardId,
            [key]: Math.abs(amount),
        });
    }
}
exports.default = Client;
