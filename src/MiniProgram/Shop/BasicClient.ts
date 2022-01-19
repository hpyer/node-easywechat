'use strict';

import BaseClient from '../../Core/BaseClient';

export default class BasicClient extends BaseClient {

  /**
   * 获取商品类目
   * @returns
   */
  getCat(): Promise<any>
  {
    return this.httpPostJson('shop/cat/get');
  }

  /**
   * 上传图片
   * @param path
   * @param respType
   * @returns
   */
  imgUpload(path: string, respType: number = 1): Promise<any>
  {
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
  auditBrand(brand: object): Promise<any>
  {
    return this.httpPostJson('shop/audit/audit_brand', {
      audit_req: brand,
    });
  }

  /**
   * 类目审核
   * @param category
   * @returns
   */
  auditCategory(category: object): Promise<any>
  {
    return this.httpPostJson('shop/audit/audit_category', {
      audit_req: category,
    });
  }

  /**
   * 获取审核结果
   * @param auditId
   * @returns
   */
  auditResult(auditId: string): Promise<any>
  {
    return this.httpPostJson('shop/audit/result', {
      audit_id: auditId,
    });
  }

  /**
   * 获取小程序资质
   * @param reqType
   * @returns
   */
  getMiniAppCertificate(reqType: number = 2): Promise<any>
  {
    return this.httpPostJson('shop/audit/get_miniapp_certificate', {
      req_type: reqType,
    });
  }

}
