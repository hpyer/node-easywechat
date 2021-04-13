'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class LiveClient extends BaseClient_1.default {
    getRooms(start = 0, limit = 10) {
        return this.httpPostJson('wxa/business/getliveinfo', {
            start,
            limit,
        });
    }
    getPlaybacks(roomId, start = 0, limit = 10) {
        return this.httpPostJson('wxa/business/getliveinfo', {
            action: 'get_replay',
            room_id: roomId,
            start,
            limit,
        });
    }
}
exports.default = LiveClient;
