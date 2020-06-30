import BaseAccessToken from '../../Core/BaseAccessToken';
export default class AccessToken extends BaseAccessToken {
    protected requestMethod: string;
    protected tokenKey: string;
    protected endpointToGetToken: string;
    protected getCredentials(): Promise<object>;
}
