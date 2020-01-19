'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.allowTypes = [
            'photo',
            'scan',
        ];
    }
    idCard(img_url, type = 'photo') {
        if (!Utils_1.inArray(type, this.allowTypes, true)) {
            throw new Error(`Unsupported type: '${type}'`);
        }
        return this.httpGet('cv/ocr/idcard', {
            type,
            img_url,
        });
    }
    bankCard(img_url) {
        return this.httpGet('cv/ocr/bankcard', {
            img_url,
        });
    }
    vehicleLicense(img_url) {
        return this.httpGet('cv/ocr/driving', {
            img_url,
        });
    }
}
exports.default = Client;
