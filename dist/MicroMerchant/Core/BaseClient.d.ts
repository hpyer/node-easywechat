import PaymentBaseClient from '../../Payment/Core/BaseClient';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare class BaseClient extends PaymentBaseClient {
    httpUpload(url: string, files?: object, form?: object, query?: object, returnResponse?: boolean): Promise<any>;
    protected request(endpoint: string, params?: object, method?: string, options?: AxiosRequestConfig, returnResponse?: boolean): Promise<AxiosResponse<any>>;
    protected processParams(params: object): object;
    protected getSensitiveFieldsName(): string[];
}
export default BaseClient;
