'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
class MovieTicketClient extends Client_1.default {
    updateUser(params) {
        return this.httpPostJson('card/movieticket/updateuser', params);
    }
}
exports.default = MovieTicketClient;
