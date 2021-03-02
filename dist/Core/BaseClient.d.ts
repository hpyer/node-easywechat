import BaseAccessToken from './BaseAccessToken';
import BaseApplication from './BaseApplication';
import HttpMixin from './Mixins/HttpMixin';
import Response from './Http/Response';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare abstract class BaseClient implements HttpMixin {
    protected accessToken: BaseAccessToken;
    protected app: BaseApplication;
    constructor(app: BaseApplication, accessToken?: BaseAccessToken);
    setAccessToken(accessToken: BaseAccessToken): this;
    getAccessToken(): BaseAccessToken;
    request(payload: AxiosRequestConfig, returnResponse?: Boolean): Promise<AxiosResponse<any>>;
    httpUpload(url: string, files?: object, form?: object, query?: object): Promise<any>;
    httpGet(url: string, query?: object): Promise<any>;
    httpPost(url: string, formData?: object): Promise<any>;
    httpPostJson(url: string, data?: object, query?: object): Promise<any>;
    requestRaw(payload: AxiosRequestConfig): Promise<Response>;
    doRequest(payload: AxiosRequestConfig): Promise<AxiosResponse<any>>;
}
export default BaseClient;
