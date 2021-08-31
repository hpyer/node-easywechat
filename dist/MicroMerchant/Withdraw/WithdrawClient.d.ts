import BaseClient from '../Core/BaseClient';
export default class WithdrawClient extends BaseClient {
    queryWithdrawalStatus(date: string, subMchId: string): Promise<any>;
    requestWithdraw(date: string, subMchId: string): Promise<any>;
}
