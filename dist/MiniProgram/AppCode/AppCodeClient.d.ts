import BaseClient from '../../Core/BaseClient';
export default class AppCodeClient extends BaseClient {
    get(path: string, optional?: object): Promise<any>;
    getUnlimit(scene: string, optional?: object): Promise<any>;
    getQrCode(path: string, width?: Number): Promise<any>;
    protected getStream(api: string, params: object): Promise<any>;
}
