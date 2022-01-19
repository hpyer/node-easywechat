import BaseClient from '../../Core/BaseClient';
export default class AccountClient extends BaseClient {
    /**
     * 获取商家类目列表
     * @returns
     */
    getCategoryList(): Promise<any>;
    /**
     * 获取商家品牌列表
     * @returns
     */
    getBrandList(): Promise<any>;
    /**
     * 更新商家信息
     * @param path 小程序path
     * @param phone 客服联系方式
     * @returns
     */
    updateInfo(path: string, phone: string): Promise<any>;
    /**
     * 获取商家信息
     * @returns
     */
    getInfo(): Promise<any>;
}
