import BaseClient from '../../Core/BaseClient';
export default class UnionClient extends BaseClient {
    createPromotion(promotionSourceName: string): Promise<any>;
    deletePromotion(promotionSourcePid: string, promotionSourceName: string): Promise<any>;
    updatePromotion(previousPromotionInfo: object, promotionInfo: object): Promise<any>;
    getPromotionSourceList(start?: number, limit?: number): Promise<any>;
    getProductCategory(): Promise<any>;
    getProductList(params: object): Promise<any>;
    getProductMaterial(pid: string, productList: object[]): Promise<any>;
    getOrderInfo(orderIdList: string[]): Promise<any>;
    searchOrder(page?: number, startTimestamp?: string, endTimestamp?: string, commissionStatus?: string): Promise<any>;
}
