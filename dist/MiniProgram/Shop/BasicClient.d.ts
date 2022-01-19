import BaseClient from '../../Core/BaseClient';
export default class BasicClient extends BaseClient {
    /**
     * 获取商品类目
     * @returns
     */
    getCat(): Promise<any>;
    /**
     * 上传图片
     * @param path
     * @param respType
     * @returns
     */
    imgUpload(path: string, respType?: number): Promise<any>;
    /**
     * 品牌审核
     * @param brand
     * @returns
     */
    auditBrand(brand: object): Promise<any>;
    /**
     * 类目审核
     * @param category
     * @returns
     */
    auditCategory(category: object): Promise<any>;
    /**
     * 获取审核结果
     * @param auditId
     * @returns
     */
    auditResult(auditId: string): Promise<any>;
    /**
     * 获取小程序资质
     * @param reqType
     * @returns
     */
    getMiniAppCertificate(reqType?: number): Promise<any>;
}
