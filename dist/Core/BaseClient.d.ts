import BaseAccessToken from './BaseAccessToken';
import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import Response from './Http/Response';
declare abstract class BaseClient implements HttpMixin {
    protected accessToken: BaseAccessToken;
    protected app: BaseApplication;
    constructor(app: BaseApplication, accessToken?: BaseAccessToken);
    setAccessToken(accessToken: BaseAccessToken): this;
    getAccessToken(): BaseAccessToken;
    request(payload: object, returnResponse?: Boolean): Promise<any>;
    httpUpload(url: string, files?: object, form?: object, query?: object): Promise<any>;
    httpGet(url: string, query?: object): Promise<any>;
    httpPost(url: string, formData?: object): Promise<any>;
    httpPostJson(url: string, data?: object, query?: object): Promise<any>;
    requestRaw(payload: object): Promise<Response>;
    doRequest(payload: object, returnResponse?: Boolean): Promise<any>;
}
export default BaseClient;
