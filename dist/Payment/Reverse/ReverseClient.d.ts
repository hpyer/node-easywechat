import BaseClient from '../Core/BaseClient';
export default class ReverseClient extends BaseClient {
    byOutTradeNumber(outTradeNumber: string): Promise<any>;
    byTransactionId(transactionId: string): Promise<any>;
    protected reverse(number: string, type: string): Promise<any>;
}
