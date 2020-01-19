'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class PageClient extends BaseClient_1.default {
    create(data) {
        return this.httpPostJson('shakearound/page/add', data);
    }
    update(pageId, data) {
        data['page_id'] = pageId;
        return this.httpPostJson('shakearound/page/update', data);
    }
    listByIds(pageIds) {
        return this.httpPostJson('shakearound/page/search', {
            type: 1,
            page_ids: pageIds,
        });
    }
    list(begin, count) {
        return this.httpPostJson('shakearound/page/search', {
            type: 2,
            begin,
            count,
        });
    }
    delete(pageId) {
        return this.httpPostJson('shakearound/page/delete', {
            page_id: pageId,
        });
    }
}
exports.default = PageClient;
