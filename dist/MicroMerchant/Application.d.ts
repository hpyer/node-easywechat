import BaseApplication from '../Core/BaseApplication';
import { EasyWechatConfig } from '../Core/Types';
import MicroMerchantBase from './Base/MicroMerchantBase';
import CertficatesClient from './Certficates/CertficatesClient';
import MediaClient from './Media/MediaClient';
import MerchantConfigClient from './MerchantConfig/MerchantConfigClient';
import MeterialClient from './Meterial/MeterialClient';
import WithdrawClient from './Withdraw/WithdrawClient';
export default class MicroMerchant extends BaseApplication {
    protected defaultConfig: EasyWechatConfig;
    base: MicroMerchantBase;
    certficates: CertficatesClient;
    media: MediaClient;
    merchantConfig: MerchantConfigClient;
    material: MeterialClient;
    withdraw: WithdrawClient;
    constructor(config?: EasyWechatConfig, prepends?: Object, id?: String);
    registerProviders(): void;
    getKey(): string;
    setSubMchId(subMchId: string, appId?: string): this;
    setCertificate(certificate: string, serialNo?: string): this;
    verifySignature(data: object): boolean;
    submitApplication(): Promise<any>;
    getStatus(): Promise<any>;
    upgrade(): Promise<any>;
    getUpgradeStatus(): Promise<any>;
}
