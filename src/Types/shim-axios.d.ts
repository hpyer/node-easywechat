
import axios from 'axios';

declare module 'axios' {

  interface AxiosInstance {
    <T = Recordable, R = ApiResponse<T>>(config: AxiosRequestConfig): Promise<R>;
    request<T = Recordable, R = ApiResponse<T>>(config: AxiosRequestConfig): Promise<R>;
    get<T = Recordable, R = ApiResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    delete<T = Recordable, R = ApiResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    head<T = Recordable, R = ApiResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = Recordable, R = ApiResponse<T>>(url: string, data?: Recordable, config?: AxiosRequestConfig): Promise<R>;
    put<T = Recordable, R = ApiResponse<T>>(url: string, data?: Recordable, config?: AxiosRequestConfig): Promise<R>;
    patch<T = Recordable, R = ApiResponse<T>>(url: string, data?: Recordable, config?: AxiosRequestConfig): Promise<R>;
  }

  interface AxiosRequestConfig {
    /**
     * 要发送的xml数据，会自动解析并赋值到data属性，同时设置content-type=text/xml
     */
    xml?: string | Recordable;
    /**
     * 要发送的json数据，会自动解析并赋值到data属性，同时设置content-type=application/json
     */
    json?: string | Recordable;
    /**
     * 要发送的FormData数据，会自动解析并赋值到data属性，同时设置根据内容提取headers
     */
    formData?: Recordable;
  }
}
