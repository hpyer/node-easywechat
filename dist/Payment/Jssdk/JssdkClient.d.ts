import BaseClient from '../../BaseService/Jssdk/JssdkClient';
export default class JssdkClient extends BaseClient {
    bridgeConfig(prepayId: string, json?: Boolean): any;
    sdkConfig(prepayId: string): object;
    appConfig(prepayId: string): object;
    shareAddressConfig(accessToken: any, json?: Boolean): Promise<any>;
}
