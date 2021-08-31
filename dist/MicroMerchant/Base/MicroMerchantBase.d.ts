import BaseClient from '../Core/BaseClient';
export default class MicroMerchantBase extends BaseClient {
    submitApplication(params: object): Promise<any>;
    getStatus(applymentId: string, businessCode?: string): Promise<any>;
    upgrade(params: object): Promise<any>;
    getUpgradeStatus(subMchId?: string): Promise<any>;
}
