
import axios from 'axios';

declare module 'axios' {

  interface AxiosInstance {
    <T = Record<string, any>, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>;
    request<T = Record<string, any>, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>;
    get<T = Record<string, any>, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    delete<T = Record<string, any>, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    head<T = Record<string, any>, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = Record<string, any>, R = AxiosResponse<T>>(url: string, data?: Record<string, any>, config?: AxiosRequestConfig): Promise<R>;
    put<T = Record<string, any>, R = AxiosResponse<T>>(url: string, data?: Record<string, any>, config?: AxiosRequestConfig): Promise<R>;
    patch<T = Record<string, any>, R = AxiosResponse<T>>(url: string, data?: Record<string, any>, config?: AxiosRequestConfig): Promise<R>;
  }

  interface AxiosRequestConfig {
    /**
     * 要发送的xml数据，会自动解析并赋值到data属性，同时设置content-type=text/xml
     */
    xml?: string | Record<string, any>;
    /**
     * 要发送的json数据，会自动解析并赋值到data属性，同时设置content-type=application/json
     */
    json?: string | Record<string, any>;
    /**
     * 要发送的FormData数据，会自动解析并赋值到data属性，同时设置根据内容提取headers
     */
    formData?: Record<string, any>;
  }
}
