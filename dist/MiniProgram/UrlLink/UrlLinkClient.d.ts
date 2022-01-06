import BaseClient from '../../Core/BaseClient';
export default class UrlLinkClient extends BaseClient {
    /**
     * 获取小程序 URL Link
     * @param params
     * @returns
     */
    generate(params?: object): Promise<any>;
}
