import BaseClient from '../../Core/BaseClient';
export default class OpenDataClient extends BaseClient {
    protected baseUrl: string;
    removeUserStorage(openid: string, sessionKey: string, key: Array<string>): Promise<any>;
    setUserStorage(openid: string, sessionKey: string, kvList: object): Promise<any>;
    protected formatKVLists(params: object): Array<object>;
}
