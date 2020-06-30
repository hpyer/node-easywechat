import BaseClient from '../../Aggregate/Account/Client';
export default class AccountClient extends BaseClient {
    getBasicInfo(): Promise<any>;
    updateAvatar(mediaId: string, left?: number, top?: number, right?: number, bottom?: number): Promise<any>;
    updateSignature(signature: string): Promise<any>;
}
