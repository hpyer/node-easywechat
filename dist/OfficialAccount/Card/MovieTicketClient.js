'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
class MovieTicketClient extends Client_1.default {
    /**
     * 更新用户信息
     * @param params 信息
     */
    updateUser(params) {
        return this.httpPostJson('card/movieticket/updateuser', params);
    }
}
exports.default = MovieTicketClient;
