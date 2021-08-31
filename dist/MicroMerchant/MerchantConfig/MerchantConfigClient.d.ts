import BaseClient from '../Core/BaseClient';
export default class MerchantConfigClient extends BaseClient {
    setFollowConfig(subAppId: string, subscribeAppId: string, receiptAppId?: string, subMchId?: string): Promise<any>;
    addPath(jsapiPath: string, appId?: string, subMchId?: string): Promise<any>;
    bindAppId(subAppId: string, appId?: string, subMchId?: string): Promise<any>;
    private addConfig;
    getConfig(subMchId: string, appId: string): Promise<any>;
}
