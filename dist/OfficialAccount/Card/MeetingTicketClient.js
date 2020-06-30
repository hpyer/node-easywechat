'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
class MeetingTicketClient extends Client_1.default {
    /**
     * 更新用户信息
     * @param params 信息
     */
    updateUser(params) {
        return this.httpPostJson('card/meetingticket/updateuser', params);
    }
}
exports.default = MeetingTicketClient;
