import BaseClient from '../Core/BaseClient';
export default class RedpackClient extends BaseClient {
    info(mchBillno: any): Promise<any>;
    sendNormal(params: object): Promise<any>;
    sendGroup(params: object): Promise<any>;
}
