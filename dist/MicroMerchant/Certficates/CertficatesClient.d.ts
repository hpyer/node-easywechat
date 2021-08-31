import BaseClient from '../Core/BaseClient';
export default class CertficatesClient extends BaseClient {
    get(returnRaw?: boolean): Promise<any>;
    decrypt(encryptCertificate: object): string;
}
