import BaseClient from '../../Core/BaseClient';
export default class OCRClient extends BaseClient {
    protected allowTypes: Array<string>;
    /**
     * 身份证识别
     * @param img_url 图片url
     * @param type
     */
    idCard(img_url: string, type?: string): Promise<any>;
    /**
     * 银行卡识别
     * @param img_url 图片url
     */
    bankCard(img_url: string): Promise<any>;
    /**
     * 行驶证识别
     * @param img_url 图片url
     */
    vehicleLicense(img_url: string): Promise<any>;
}
