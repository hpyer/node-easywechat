import BaseClient from '../Core/BaseClient';
export default class TransferClient extends BaseClient {
    queryBalanceOrder(partnerTradeNo: string): Promise<any>;
    queryBankCardOrder(partnerTradeNo: string): Promise<any>;
    toBalance(params: object): Promise<any>;
    toBankCard(params: object): Promise<any>;
}
