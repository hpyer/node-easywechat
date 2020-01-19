'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
class BoardingPassClient extends Client_1.default {
    checkin(params) {
        return this.httpPostJson('card/boardingpass/checkin', params);
    }
}
exports.default = BoardingPassClient;
