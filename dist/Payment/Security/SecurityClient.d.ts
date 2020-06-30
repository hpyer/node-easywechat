import BaseClient from '../Core/BaseClient';
export default class SecurityClient extends BaseClient {
    getPublicKey(): Promise<any>;
}
