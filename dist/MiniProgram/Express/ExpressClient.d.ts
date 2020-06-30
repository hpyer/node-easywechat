import BaseClient from '../../Core/BaseClient';
export default class ExpressClient extends BaseClient {
    listProviders(): Promise<any>;
    createWaybill(params?: object): Promise<any>;
    deleteWaybill(params?: object): Promise<any>;
    getWaybill(params?: object): Promise<any>;
    getWaybillTrack(params?: object): Promise<any>;
    getBalance(deliveryId?: string, bizId?: string): Promise<any>;
    bindPrinter(openid?: string): Promise<any>;
    unbindPrinter(openid?: string): Promise<any>;
}
