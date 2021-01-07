'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class OCRClient extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.allowTypes = [
            'photo',
            'scan',
        ];
    }
    /**
     * 身份证识别
     * @param img_url 图片url
     * @param type
     */
    idCard(img_url, type = 'photo') {
        if (!Utils_1.inArray(type, this.allowTypes, true)) {
            throw new Error(`Unsupported type: '${type}'`);
        }
        return this.httpGet('cv/ocr/idcard', {
            type,
            img_url,
        });
    }
    /**
     * 银行卡识别
     * @param img_url 图片url
     */
    bankCard(img_url) {
        return this.httpGet('cv/ocr/bankcard', {
            img_url,
        });
    }
    /**
     * 行驶证识别
     * @param img_url 图片url
     */
    vehicleLicense(img_url) {
        return this.httpGet('cv/ocr/driving', {
            img_url,
        });
    }
}
exports.default = OCRClient;
