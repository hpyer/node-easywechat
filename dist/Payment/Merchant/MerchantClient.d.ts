import BaseClient from '../Core/BaseClient';
export default class MerchantClient extends BaseClient {
    addSubMerchant(params: object): Promise<any>;
    querySubMerchantByMerchantId(id: string): Promise<any>;
    querySubMerchantByWeChatId(id: string): Promise<any>;
    protected manage(params: object, query: object): Promise<any>;
}
