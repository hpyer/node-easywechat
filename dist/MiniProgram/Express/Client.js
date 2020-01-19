'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    listProviders() {
        return this.httpGet('cgi-bin/express/business/delivery/getall');
    }
    createWaybill(params = {}) {
        return this.httpPostJson('cgi-bin/express/business/order/add', params);
    }
    deleteWaybill(params = {}) {
        return this.httpPostJson('cgi-bin/express/business/order/cancel', params);
    }
    getWaybill(params = {}) {
        return this.httpPostJson('cgi-bin/express/business/order/get', params);
    }
    getWaybillTrack(params = {}) {
        return this.httpPostJson('cgi-bin/express/business/path/get', params);
    }
    getBalance(deliveryId = '', bizId = '') {
        return this.httpPostJson('cgi-bin/express/business/quota/get', {
            delivery_id: deliveryId,
            biz_id: bizId,
        });
    }
    bindPrinter(openid = '') {
        return this.httpPostJson('cgi-bin/express/business/printer/update', {
            update_type: 'bind',
            openid: openid,
        });
    }
    unbindPrinter(openid = '') {
        return this.httpPostJson('cgi-bin/express/business/printer/update', {
            update_type: 'unbind',
            openid: openid,
        });
    }
}
exports.default = Client;
