import BaseAccessToken from '../../../Core/BaseAccessToken';
import OpenWorkApplication from '../../Application';
import BaseApplicatioin from '../../../Core/BaseApplication';
export default class AccessToken extends BaseAccessToken {
    protected requestMethod: string;
    protected authCorpId: string;
    protected permanentCode: string;
    protected component: OpenWorkApplication;
    constructor(app: BaseApplicatioin, authCorpId: string, permanentCode: string, component: OpenWorkApplication);
    protected getCredentials(): Promise<object>;
    getEndpoint(): Promise<string>;
}
