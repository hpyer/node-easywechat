import BaseAccessToken from '../../Core/BaseAccessToken';
export default class AccessToken extends BaseAccessToken {
    protected endpointToGetToken: string;
    getCredentials(): Promise<object>;
}
