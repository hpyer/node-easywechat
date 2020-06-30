import BaseClient from '../../Core/BaseClient';
export default class OpenPlatformBase extends BaseClient {
    handleAuthorize(authCode?: string): Promise<any>;
    getAuthorizer(appId: string): Promise<any>;
    getAuthorizerOption(appId: string, name: string): Promise<any>;
    setAuthorizerOption(appId: string, name: string, value: string): Promise<any>;
    getAuthorizers(offset?: number, count?: number): Promise<any>;
    createPreAuthorizationCode(): Promise<any>;
    clearQuota(): Promise<any>;
}
