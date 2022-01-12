'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class KfServicerClient extends BaseClient_1.default {
    /**
     * 添加接待人员
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94646
     * @param openKfId
     * @param userIds
     * @returns
     */
    add(openKfId, userIds) {
        let params = {
            open_kfid: openKfId,
            media_id: userIds,
        };
        return this.httpPostJson('cgi-bin/kf/servicer/add', params);
    }
    /**
     * 删除接待人员
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94647
     * @param openKfId
     * @param userIds
     * @returns
     */
    del(openKfId, userIds) {
        return this.httpPostJson('cgi-bin/kf/servicer/del', {
            open_kfid: openKfId,
            userid_list: userIds,
        });
    }
    /**
     * 获取接待人员列表
     * @see https://open.work.weixin.qq.com/api/doc/90000/90135/94645
     * @param openKfId
     * @returns
     */
    list(openKfId) {
        return this.httpGet('cgi-bin/kf/servicer/list', {
            open_kfid: openKfId,
        });
    }
}
exports.default = KfServicerClient;
