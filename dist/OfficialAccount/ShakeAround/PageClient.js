'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class PageClient extends BaseClient_1.default {
    /**
     * 新增页面
     * @param data 页面信息。子参数：title，标题；description，副标题；icon_url，图片url；comment：备注
     */
    create(data) {
        return this.httpPostJson('shakearound/page/add', data);
    }
    /**
     * 编辑页面信息
     * @param pageId 页面id
     * @param data 页面信息
     */
    update(pageId, data) {
        data['page_id'] = pageId;
        return this.httpPostJson('shakearound/page/update', data);
    }
    /**
     * 根据页面id批量取回页面数据
     * @param pageIds 页面的id列表
     */
    listByIds(pageIds) {
        return this.httpPostJson('shakearound/page/search', {
            type: 1,
            page_ids: pageIds,
        });
    }
    /**
     * 分页批量取回页面数据
     * @param begin 页面列表的起始索引值
     * @param count 待查询的页面数量，不能超过50个
     */
    list(begin, count) {
        return this.httpPostJson('shakearound/page/search', {
            type: 2,
            begin,
            count,
        });
    }
    /**
     * 删除页面
     * @param pageId 页面id
     */
    delete(pageId) {
        return this.httpPostJson('shakearound/page/delete', {
            page_id: pageId,
        });
    }
}
exports.default = PageClient;
