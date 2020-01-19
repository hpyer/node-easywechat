'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class CoinClient extends BaseClient_1.default {
    activate() {
        return this.httpGet('card/pay/activate');
    }
    summary() {
        return this.httpGet('card/pay/getcoinsinfo');
    }
    getPrice(cardId = '', quantity) {
        return this.httpPostJson('card/pay/getpayprice', {
            card_id: cardId,
            quantity,
        });
    }
    recharge(count) {
        return this.httpPostJson('card/pay/recharge', {
            coin_count: count,
        });
    }
    order(orderId) {
        return this.httpPostJson('card/pay/getorder', {
            order_id: orderId,
        });
    }
    orders(filters) {
        return this.httpPostJson('card/pay/getorderlist', filters);
    }
    confirm(cardId = '', orderId, quantity) {
        return this.httpPostJson('card/pay/confirm', {
            card_id: cardId,
            order_id: orderId,
            quantity,
        });
    }
}
exports.default = CoinClient;
