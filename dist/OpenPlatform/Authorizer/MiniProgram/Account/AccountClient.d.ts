import BaseClient from '../../Aggregate/Account/Client';
export default class AccountClient extends BaseClient {
    /**
     * 获取基本信息
     */
    getBasicInfo(): Promise<any>;
    /**
     * 修改头像
     * @param mediaId 头像素材 media_id
     * @param left 裁剪框左上角 x 坐标（取值范围：[0, 1]）
     * @param top 裁剪框左上角 y 坐标（取值范围：[0, 1]）
     * @param right 裁剪框右下角 x 坐标（取值范围：[0, 1]）
     * @param bottom 裁剪框右下角 y 坐标（取值范围：[0, 1]）
     */
    updateAvatar(mediaId: string, left?: number, top?: number, right?: number, bottom?: number): Promise<any>;
    /**
     * 修改功能介绍
     * @param signature 功能介绍（简介）
     */
    updateSignature(signature: string): Promise<any>;
}
