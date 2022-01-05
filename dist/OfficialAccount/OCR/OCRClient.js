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
        if (!(0, Utils_1.inArray)(type, this.allowTypes, true)) {
            throw new Error(`Unsupported type: '${type}'`);
        }
        return this.httpPost('cv/ocr/idcard', {
            type,
            img_url,
        });
    }
    /**
     * 银行卡识别
     * @param img_url 图片url
     */
    bankCard(img_url) {
        return this.httpPost('cv/ocr/bankcard', {
            img_url,
        });
    }
    /**
     * 行驶证识别
     * @param img_url 图片url
     */
    vehicleLicense(img_url) {
        return this.httpPost('cv/ocr/drivinglicense', {
            img_url,
        });
    }
    /**
     * 驾驶证识别
     * @param img_url 图片url
     */
    driving(img_url) {
        return this.httpPost('cv/ocr/driving', {
            img_url,
        });
    }
    /**
     * 营业执照识别
     * @param img_url 图片url
     */
    bizLicense(img_url) {
        return this.httpPost('cv/ocr/bizlicense', {
            img_url,
        });
    }
    /**
     * 通用印刷体识别
     * @param img_url 图片url
     */
    common(img_url) {
        return this.httpPost('cv/ocr/comm', {
            img_url,
        });
    }
    /**
     * 车牌识别
     * @param img_url 图片url
     */
    plateNumber(img_url) {
        return this.httpPost('cv/ocr/platenum', {
            img_url,
        });
    }
}
exports.default = OCRClient;
