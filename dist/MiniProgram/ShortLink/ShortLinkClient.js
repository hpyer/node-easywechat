'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class ShortLinkClient extends BaseClient_1.default {
    /**
     * 获取小程序 Short Link
     * @param pageUrl
     * @param pageTitle
     * @param isPermanent
     * @returns
     */
    getShortLink(pageUrl, pageTitle, isPermanent = false) {
        return this.httpPostJson('wxa/genwxashortlink', {
            page_url: pageUrl,
            page_title: pageTitle,
            is_permanent: isPermanent,
        });
    }
}
exports.default = ShortLinkClient;
