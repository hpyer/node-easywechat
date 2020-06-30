import BaseClient from '../../Core/BaseClient';
export default class UrlClient extends BaseClient {
    protected baseUri: string;
    /**
     * 获取短网址
     * @param long_url 原始URL地址
     */
    shorten(long_url: any): Promise<any>;
}
