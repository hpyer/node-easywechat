'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class InvoiceClient extends BaseClient_1.default {
    get(cardId, encryptCode) {
        let params = {
            card_id: cardId,
            encrypt_code: encryptCode,
        };
        return this.httpPostJson('cgi-bin/card/invoice/reimburse/getinvoiceinfo', params);
    }
    select(invoices) {
        let params = {
            item_list: invoices,
        };
        return this.httpPostJson('cgi-bin/card/invoice/reimburse/getinvoiceinfobatch', params);
    }
    update(cardId, encryptCode, status) {
        let params = {
            card_id: cardId,
            encrypt_code: encryptCode,
            reimburse_status: status,
        };
        return this.httpPostJson('cgi-bin/card/invoice/reimburse/updateinvoicestatus', params);
    }
    batchUpdate(invoices, openid, status) {
        let params = {
            invoice_list: invoices,
            openid: openid,
            reimburse_status: status,
        };
        return this.httpPostJson('cgi-bin/card/invoice/reimburse/updatestatusbatch', params);
    }
}
exports.default = InvoiceClient;
