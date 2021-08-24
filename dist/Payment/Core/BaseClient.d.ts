import BaseApplication from '../../Payment/Application';
import HttpMixin from '../../Core/Mixins/HttpMixin';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare class BaseClient implements HttpMixin {
    protected app: BaseApplication;
    protected serverIp: String;
    constructor(app: BaseApplication);
    protected prepends(): {};
    protected request(endpoint: string, params?: object, method?: string, options?: AxiosRequestConfig, returnResponse?: boolean): Promise<AxiosResponse<any>>;
    protected safeRequest(endpoint: string, params?: object, method?: string, options?: AxiosRequestConfig): Promise<any>;
    protected requestRaw(endpoint: string, params?: object, method?: string, options?: AxiosRequestConfig): Promise<any>;
    protected wrap(endpoint: string): string;
    getServerIp(): Promise<String>;
    getClientIp(): string;
    doRequest(payload: AxiosRequestConfig): Promise<AxiosResponse<any>>;
}
export default BaseClient;
