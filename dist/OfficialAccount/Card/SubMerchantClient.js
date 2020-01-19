'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class SubMerchantClient extends BaseClient_1.default {
    create(info) {
        let params = {
            info: {
                brand_name: info['brand_name'] || '',
                logo_url: info['logo_url'] || '',
                protocol: info['protocol'] || '',
                end_time: info['end_time'] || '',
                primary_category_id: info['primary_category_id'] || '',
                secondary_category_id: info['secondary_category_id'] || '',
                agreement_media_id: info['agreement_media_id'] || '',
                operator_media_id: info['operator_media_id'] || '',
                app_id: info['app_id'] || '',
            },
        };
        return this.httpPostJson('card/submerchant/submit', params);
    }
    update(merchantId, info) {
        let params = {
            info: {
                merchant_id: merchantId,
                brand_name: info['brand_name'] || '',
                logo_url: info['logo_url'] || '',
                protocol: info['protocol'] || '',
                end_time: info['end_time'] || '',
                primary_category_id: info['primary_category_id'] || '',
                secondary_category_id: info['secondary_category_id'] || '',
                agreement_media_id: info['agreement_media_id'] || '',
                operator_media_id: info['operator_media_id'] || '',
                app_id: info['app_id'] || '',
            },
        };
        return this.httpPostJson('card/submerchant/update', params);
    }
    get(merchantId) {
        return this.httpPostJson('card/submerchant/get', {
            merchant_id: merchantId,
        });
    }
    list(beginId = 0, limit = 50, status = 'CHECKING') {
        return this.httpPostJson('card/submerchant/get', {
            begin_id: beginId,
            limit,
            status,
        });
    }
}
exports.default = SubMerchantClient;
