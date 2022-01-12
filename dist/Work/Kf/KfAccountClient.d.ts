import BaseClient from '../../Core/BaseClient';
export default class KfAccountClient extends BaseClient {
    /**
     * 添加客服帐号
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94662
     * @param name
     * @param mediaId
     * @returns
     */
    add(name: string, mediaId: string): Promise<any>;
    /**
     * 修改客服帐号
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94664
     * @param openKfId
     * @param name
     * @param mediaId
     * @returns
     */
    update(openKfId: string, name: string, mediaId: string): Promise<any>;
    /**
     * 删除客服帐号
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94663
     * @param openKfId
     * @returns
     */
    del(openKfId: string): Promise<any>;
    /**
     * 获取客服帐号列表
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94661
     * @returns
     */
    list(): Promise<any>;
    /**
     * 获取客服帐号链接
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94665
     * @param openKfId
     * @param scene
     * @returns
     */
    getAccountLink(openKfId: string, scene: string): Promise<any>;
}
