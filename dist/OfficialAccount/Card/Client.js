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
        this.ticketCachePrefix = 'easywechat.official_account.card.api_ticket.';
    }
    /**
     * 获取卡券颜色
     */
    colors() {
        return this.httpGet('card/getcolors');
    }
    /**
     * 卡券开放类目查询
     */
    categories() {
        return this.httpGet('card/getapplyprotocol');
    }
    /**
     * 创建卡券
     * @param cardType 卡券类型
     * @param attributes 卡券信息
     */
    create(cardType = '', attributes) {
        return this.httpPostJson('card/create', {
            card: {
                card_type: cardType.toUpperCase(),
                [cardType.toLowerCase()]: attributes,
            }
        });
    }
    /**
     * 获取卡券详情
     * @param cardId 卡券id
     */
    get(cardId = '') {
        return this.httpPostJson('card/get', {
            card_id: cardId
        });
    }
    /**
     * 批量查询卡列表
     * @param offset 查询卡列表的起始偏移量，从0开始
     * @param count 需要查询的卡片的数量
     * @param statusList 支持开发者拉出指定状态的卡券列表。可选值：CARD_STATUS_NOT_VERIFY, 待审核；CARD_STATUS_VERIFY_FAIL, 审核失败；CARD_STATUS_VERIFY_OK， 通过审核；CARD_STATUS_USER_DELETE，卡券被商户删除；CARD_STATUS_DISPATCH，在公众平台投放过的卡券；默认：CARD_STATUS_VERIFY_OK
     */
    list(offset = 0, count = 10, statusList = 'CARD_STATUS_VERIFY_OK') {
        return this.httpPostJson('card/batchget', {
            offset,
            count,
            status_list: statusList,
        });
    }
    /**
     * 更改卡券信息
     * @param cardId 卡券id
     * @param type 卡券类型
     * @param attributes 卡券信息
     */
    update(cardId, type, attributes = {}) {
        return this.httpPostJson('card/update', {
            card_id: cardId,
            [type.toLowerCase()]: attributes,
        });
    }
    /**
     * 删除卡券
     * @param cardId 卡券id
     */
    delete(cardId) {
        return this.httpPostJson('card/delete', {
            card_id: cardId,
        });
    }
    /**
     * 生成卡券二维码
     * @param info 卡券信息
     */
    createQrCode(info) {
        return this.httpPostJson('card/qrcode/create', info);
    }
    /**
     * ticket 换取二维码图片
     * @param ticket 通过createQrCode方法获得
     */
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
    /**
     * ticket 换取二维码链接
     * @param ticket 通过createQrCode方法获得
     */
    getQrCodeUrl(ticket) {
        return `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${ticket}`;
    }
    /**
     * 创建货架
     * @param banner 页面的 banner 图
     * @param pageTitle 页面的 title
     * @param canShare 页面是不是可以分享，true 或 false
     * @param scene 投放页面的场景值。可选值：SCENE_NEAR_BY，附近；SCENE_MENU，自定义菜单；SCENE_QRCODE，二维码；SCENE_ARTICLE，公众号文章；SCENE_H5，h5页面；SCENE_IVR，自动回复；SCENE_CARD_CUSTOM_CELL，卡券自定义cell；
     * @param cardList 卡券列表，每个元素有card_id、thumb_url两个字段
     */
    createLandingPage(banner, pageTitle, canShare, scene, cardList) {
        return this.httpPostJson('card/landingpage/create', {
            banner,
            page_title: pageTitle,
            can_share: canShare,
            scene,
            card_list: cardList,
        });
    }
    /**
     * 图文消息群发卡券
     * @param cardId 卡券id
     */
    getHtml(cardId) {
        return this.httpPostJson('card/mpnews/gethtml', {
            card_id: cardId,
        });
    }
    /**
     * 设置测试白名单
     * @param openids 测试的openid列表
     */
    setTestWhitelist(openids) {
        return this.httpPostJson('card/testwhitelist/set', {
            openid: openids,
        });
    }
    /**
     * 设置测试白名单
     * @param openids 测试的微信号列表
     */
    setTestWhitelistByName(usernames) {
        return this.httpPostJson('card/testwhitelist/set', {
            username: usernames,
        });
    }
    /**
     * 获取用户已领取卡券
     * @param openid 用户openid
     * @param cardId 卡券id
     */
    getUserCards(openid, cardId = '') {
        return this.httpPostJson('card/user/getcardlist', {
            openid,
            card_id: cardId,
        });
    }
    /**
     * 设置微信买单
     * @param cardId 卡券id
     * @param isOpen 是否开启买单功能，填 true/false，默认：true
     */
    setPayCell(cardId, isOpen = true) {
        return this.httpPostJson('card/paycell/set', {
            card_id: cardId,
            is_open: isOpen,
        });
    }
    /**
     * 增加库存
     * @param cardId 卡券id
     * @param amount 修改数量
     */
    increaseStock(cardId, amount) {
        return this.updateStock(cardId, amount, 'increase');
    }
    /**
     * 减少库存
     * @param cardId 卡券id
     * @param amount 修改数量
     */
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
