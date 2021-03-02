import { AxiosRequestConfig, AxiosResponse } from 'axios';
export default class HttpMixin {
    doRequest(payload: AxiosRequestConfig): Promise<AxiosResponse<any>>;
}
