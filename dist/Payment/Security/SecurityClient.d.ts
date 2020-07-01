import BaseClient from '../Core/BaseClient';
export default class SecurityClient extends BaseClient {
    /**
     * 获取 RSA 公钥
     */
    getPublicKey(): Promise<any>;
}
