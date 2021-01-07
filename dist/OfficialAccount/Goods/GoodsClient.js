'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class GoodsClient extends BaseClient_1.default {
    /**
     * 批量导入商品
     * @param product 商品信息列表，每次最多1000条
     */
    add(product) {
        return this.httpPostJson('scan/product/v2/add', {
            product,
        });
    }
    /**
     * 批量更新商品
     * @param product 商品信息列表，每次最多1000条
     */
    update(product) {
        return this.httpPostJson('scan/product/v2/add', {
            product,
        });
    }
    /**
     * 查询导入/更新商品状态
     * @param status_ticket 从add或update方法返回
     */
    status(status_ticket) {
        return this.httpPostJson('scan/product/v2/status', {
            status_ticket,
        });
    }
    /**
     * 获取单个商品信息
     * @param pid 商品id
     */
    get(pid) {
        return this.httpPostJson('scan/product/v2/getinfo', {
            product: {
                pid,
            },
        });
    }
    /**
     * 分页获取商品信息
     * @param context page 为 1 时传空即可。当 page 大于 1 时必填，填入上一次访问本接口返回的 page_context
     * @param page 页码
     * @param size 每页数据大小，目前限制为100以内，默认：10
     */
    list(context = '', page = 1, size = 10) {
        return this.httpPostJson('scan/product/v2/getinfobypage', {
            page_context: context,
            page_num: page,
            page_size: size,
        });
    }
}
exports.default = GoodsClient;
