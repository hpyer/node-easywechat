'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class KfAccountClient extends BaseClient_1.default {
    /**
     * 添加客服帐号
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94662
     * @param name
     * @param mediaId
     * @returns
     */
    add(name, mediaId) {
        let params = {
            name,
            media_id: mediaId,
        };
        return this.httpPostJson('cgi-bin/kf/account/add', params);
    }
    /**
     * 修改客服帐号
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94664
     * @param openKfId
     * @param name
     * @param mediaId
     * @returns
     */
    update(openKfId, name, mediaId) {
        let params = {
            open_kfid: openKfId,
            name,
            media_id: mediaId,
        };
        return this.httpPostJson('cgi-bin/kf/account/update', params);
    }
    /**
     * 删除客服帐号
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94663
     * @param openKfId
     * @returns
     */
    del(openKfId) {
        return this.httpPostJson('cgi-bin/kf/account/del', {
            open_kfid: openKfId,
        });
    }
    /**
     * 获取客服帐号列表
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94661
     * @returns
     */
    list() {
        return this.httpGet('cgi-bin/kf/account/list');
    }
    /**
     * 获取客服帐号链接
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94665
     * @param openKfId
     * @param scene
     * @returns
     */
    getAccountLink(openKfId, scene) {
        return this.httpPostJson('cgi-bin/kf/add_contact_way', {
            open_kfid: openKfId,
            scene,
        });
    }
}
exports.default = KfAccountClient;
