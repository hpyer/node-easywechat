'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
class BoardingPassClient extends Client_1.default {
    checkin(params) {
        return this.httpPostJson('card/boardingpass/checkin', params);
    }
}
exports.default = BoardingPassClient;
