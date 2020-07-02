import BaseAccessToken from '../../../Core/BaseAccessToken';
import OpenPlatformApplication from '../../Application';
import BaseApplicatioin from '../../../Core/BaseApplication';
export default class AccessToken extends BaseAccessToken {
    protected requestMethod: string;
    protected queryName: string;
    protected tokenKey: string;
    protected component: OpenPlatformApplication;
    constructor(app: BaseApplicatioin, component: OpenPlatformApplication);
    protected getCredentials(): Promise<object>;
    getEndpoint(): Promise<string>;
}
