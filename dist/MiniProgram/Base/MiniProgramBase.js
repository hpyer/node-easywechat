'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Merge = require("merge");
class MiniProgramBase extends BaseClient_1.default {
    getPaidUnionid(openid, optional = {}) {
        let params = Merge({
            openid,
        }, optional);
        return this.httpGet('wxa/getpaidunionid', params);
    }
}
exports.default = MiniProgramBase;
