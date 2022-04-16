'use strict';

import BaseClient from '../../Core/BaseClient';

export default class UnionClient extends BaseClient {

  createPromotion(promotionSourceName: string): Promise<any> {
    return this.httpPostJson('union/promoter/promotion/add', {
      promotionSourceName,
    });
  }

  deletePromotion(promotionSourcePid: string, promotionSourceName: string): Promise<any> {
    return this.httpPostJson('union/promoter/promotion/del', {
      promotionSourcePid,
      promotionSourceName,
    });
  }

  updatePromotion(previousPromotionInfo: object, promotionInfo: object): Promise<any> {
    return this.httpPostJson('union/promoter/promotion/upd', {
      previousPromotionInfo,
      promotionInfo,
    });
  }

  getPromotionSourceList(start: number = 0, limit: number = 20): Promise<any> {
    return this.httpGet('union/promoter/promotion/list', {
      start,
      limit,
    });
  }

  getProductCategory(): Promise<any> {
    return this.httpGet('union/promoter/product/category');
  }

  getProductList(params: object): Promise<any> {
    return this.httpGet('union/promoter/product/list', params);
  }

  getProductMaterial(pid: string, productList: object[]): Promise<any> {
    return this.httpPostJson('union/promoter/product/generate', {
      pid,
      productList,
    });
  }

  getOrderInfo(orderIdList: string[]): Promise<any> {
    return this.httpPostJson('union/promoter/order/info', {
      orderIdList,
    });
  }

  searchOrder(page: number = 1, startTimestamp: string = '', endTimestamp: string = '', commissionStatus: string = ''): Promise<any> {
    return this.httpGet('union/promoter/order/search', {
      page,
      startTimestamp,
      endTimestamp,
      commissionStatus,
    });
  }

  getFeaturedProducts(params: object): Promise<any> {
    return this.httpGet('union/promoter/product/select', params);
  }

  getTargetPlanInfo(params: object): Promise<any>
  {
    return this.httpGet('union/promoter/target/plan_info', params);
  }

  applyJoinTargetPlan(params: object): Promise<any>
  {
    return this.httpPostJson('union/promoter/target/apply_target', params);
  }

  getTargetPlanStatus(params: object): Promise<any>
  {
    return this.httpGet('union/promoter/target/apply_status', params);
  }

}
