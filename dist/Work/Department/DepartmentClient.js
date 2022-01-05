'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class DepartmentClient extends BaseClient_1.default {
    create(data) {
        return this.httpPostJson('cgi-bin/department/create', data);
    }
    update(id, data) {
        let params = (0, Utils_1.merge)({
            id: id,
        }, data);
        return this.httpPostJson('cgi-bin/department/update', params);
    }
    delete(id) {
        return this.httpGet('cgi-bin/department/delete', {
            id
        });
    }
    list(id) {
        return this.httpGet('cgi-bin/department/list', {
            id,
        });
    }
}
exports.default = DepartmentClient;
