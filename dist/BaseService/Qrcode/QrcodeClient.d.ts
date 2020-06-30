import BaseClient from '../../Core/BaseClient';
export default class QrcodeClient extends BaseClient {
    DAY: number;
    SCENE_MAX_VALUE: number;
    SCENE_QR_CARD: string;
    SCENE_QR_TEMPORARY: string;
    SCENE_QR_TEMPORARY_STR: string;
    SCENE_QR_FOREVER: string;
    SCENE_QR_FOREVER_STR: string;
    protected baseUrl: string;
    /**
     * 创建临时二维码
     * @param sceneValue 业务标识
     * @param expireSeconds 有效时间，单位：秒
     */
    temporary(sceneValue: any, expireSeconds?: number): Promise<any>;
    /**
     * 创建永久二维码
     * @param sceneValue 业务标识
     */
    forever(sceneValue: any): Promise<any>;
    /**
     * 获取二维码地址
     * @param ticket 通过temporary或forever方法获得
     */
    url(ticket: string): string;
    protected create(actionName: string, actionInfo: any, temporary?: Boolean, expireSeconds?: number): Promise<any>;
}
