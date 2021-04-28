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
    /**
     * 驾驶证识别
     * @param img_url 图片url
     */
    driving(img_url: string): Promise<any>;
    /**
     * 营业执照识别
     * @param img_url 图片url
     */
    bizLicense(img_url: string): Promise<any>;
    /**
     * 通用印刷体识别
     * @param img_url 图片url
     */
    common(img_url: string): Promise<any>;
    /**
     * 车牌识别
     * @param img_url 图片url
     */
    plateNumber(img_url: string): Promise<any>;
}
