import BaseClient from '../../Core/BaseClient';
export default class AuthClient extends BaseClient {
    session(code: string): Promise<any>;
}
