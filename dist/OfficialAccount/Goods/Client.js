'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    add(product) {
        return this.httpPostJson('scan/product/v2/add', {
            product,
        });
    }
    update(product) {
        return this.httpPostJson('scan/product/v2/add', {
            product,
        });
    }
    status(status_ticket) {
        return this.httpPostJson('scan/product/v2/status', {
            status_ticket,
        });
    }
    get(pid) {
        return this.httpPostJson('scan/product/v2/getinfo', {
            product: {
                pid,
            },
        });
    }
    list(context = '', page = 1, size = 10) {
        return this.httpPostJson('scan/product/v2/getinfobypage', {
            page_context: context,
            page_num: page,
            page_size: size,
        });
    }
}
exports.default = Client;
