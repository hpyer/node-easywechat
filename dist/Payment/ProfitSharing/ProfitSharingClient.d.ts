import BaseClient from '../Core/BaseClient';
export default class ProfitSharingClient extends BaseClient {
    protected prepends(): object;
    addReceiver(receiver: object): Promise<any>;
    deleteReceiver(receiver: object): Promise<any>;
    share(transactionId: string, outOrderNo: string, receivers: Array<object>): Promise<any>;
    multiShare(transactionId: string, outOrderNo: string, receivers: Array<object>): Promise<any>;
    markOrderAsFinished(params: object): Promise<any>;
    query(transactionId: string, outOrderNo: string): Promise<any>;
}
