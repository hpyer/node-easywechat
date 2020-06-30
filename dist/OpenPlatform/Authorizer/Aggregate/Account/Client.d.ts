import BaseClient from '../../../../Core/BaseClient';
export default class Client extends BaseClient {
    create(): Promise<any>;
    bindTo(openAppId: string): Promise<any>;
    unbindFrom(openAppId: string): Promise<any>;
    getBinding(): Promise<any>;
}
