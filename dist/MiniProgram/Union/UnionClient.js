'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class UnionClient extends BaseClient_1.default {
    createPromotion(promotionSourceName) {
        return this.httpPostJson('union/promoter/promotion/add', {
            promotionSourceName,
        });
    }
    deletePromotion(promotionSourcePid, promotionSourceName) {
        return this.httpPostJson('union/promoter/promotion/del', {
            promotionSourcePid,
            promotionSourceName,
        });
    }
    updatePromotion(previousPromotionInfo, promotionInfo) {
        return this.httpPostJson('union/promoter/promotion/upd', {
            previousPromotionInfo,
            promotionInfo,
        });
    }
    getPromotionSourceList(start = 0, limit = 20) {
        return this.httpGet('union/promoter/promotion/list', {
            start,
            limit,
        });
    }
    getProductCategory() {
        return this.httpGet('union/promoter/product/category');
    }
    getProductList(params) {
        return this.httpGet('union/promoter/product/list', params);
    }
    getProductMaterial(pid, productList) {
        return this.httpPostJson('union/promoter/product/generate', {
            pid,
            productList,
        });
    }
    getOrderInfo(orderIdList) {
        return this.httpPostJson('union/promoter/order/info', {
            orderIdList,
        });
    }
    searchOrder(page = 1, startTimestamp = '', endTimestamp = '', commissionStatus = '') {
        return this.httpGet('union/promoter/order/search', {
            page,
            startTimestamp,
            endTimestamp,
            commissionStatus,
        });
    }
}
exports.default = UnionClient;
