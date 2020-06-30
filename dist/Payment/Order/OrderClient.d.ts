import BaseClient from '../Core/BaseClient';
export default class OrderClient extends BaseClient {
    unify(params: object, isContract?: Boolean): Promise<any>;
    queryByOutTradeNumber(out_trade_no: string): Promise<any>;
    queryByTransactionId(transaction_id: string): Promise<any>;
    protected query(params: object): Promise<any>;
    close(tradeNo: string): Promise<any>;
}
