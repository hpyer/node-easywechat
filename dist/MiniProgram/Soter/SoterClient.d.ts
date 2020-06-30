import BaseClient from '../../Core/BaseClient';
export default class SoterClient extends BaseClient {
    verifySignature(openid: string, json: string, signature: string): Promise<any>;
}
