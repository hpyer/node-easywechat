'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class BasicClient extends BaseClient_1.default {
    /**
     * 获取商品类目
     * @returns
     */
    getCat() {
        return this.httpPostJson('shop/cat/get');
    }
    /**
     * 上传图片
     * @param path
     * @param respType
     * @returns
     */
    imgUpload(path, respType = 1) {
        return this.httpUpload('customservice/kfaccount/uploadheadimg', {
            media: path,
        }, {
            resp_type: respType,
        });
    }
    /**
     * 品牌审核
     * @param brand
     * @returns
     */
    auditBrand(brand) {
        return this.httpPostJson('shop/audit/audit_brand', {
            audit_req: brand,
        });
    }
    /**
     * 类目审核
     * @param category
     * @returns
     */
    auditCategory(category) {
        return this.httpPostJson('shop/audit/audit_category', {
            audit_req: category,
        });
    }
    /**
     * 获取审核结果
     * @param auditId
     * @returns
     */
    auditResult(auditId) {
        return this.httpPostJson('shop/audit/result', {
            audit_id: auditId,
        });
    }
    /**
     * 获取小程序资质
     * @param reqType
     * @returns
     */
    getMiniAppCertificate(reqType = 2) {
        return this.httpPostJson('shop/audit/get_miniapp_certificate', {
            req_type: reqType,
        });
    }
}
exports.default = BasicClient;
