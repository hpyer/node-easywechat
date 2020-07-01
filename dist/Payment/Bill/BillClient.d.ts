import BaseClient from '../Core/BaseClient';
export default class BillClient extends BaseClient {
    /**
     * 下载对账单
     * @param date 对账单的日期，格式：20140603
     * @param type 账单类型，默认：ALL
     * @param options 其它参数
     */
    get(date: string, type?: string, options?: object): Promise<any>;
}
