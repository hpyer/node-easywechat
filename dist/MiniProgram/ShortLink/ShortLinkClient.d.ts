import BaseClient from '../../Core/BaseClient';
export default class ShortLinkClient extends BaseClient {
    /**
     * 获取小程序 Short Link
     * @param pageUrl
     * @param pageTitle
     * @param isPermanent
     * @returns
     */
    getShortLink(pageUrl: string, pageTitle: string, isPermanent?: boolean): Promise<any>;
}
