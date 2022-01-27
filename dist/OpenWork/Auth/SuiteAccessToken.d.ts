import BaseAccessToken from '../../Core/BaseAccessToken';
export default class SuiteAccessToken extends BaseAccessToken {
    protected requestMethod: string;
    protected tokenKey: string;
    protected endpointToGetToken: string;
    protected cachePrefix: string;
    protected getCredentials(): Promise<object>;
}
