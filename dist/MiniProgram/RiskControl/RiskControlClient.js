'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
class RiskControlClient extends BaseClient_1.default {
    getUserRiskRank(params) {
        return this.httpPost('wxa/getuserriskrank', params);
    }
}
exports.default = RiskControlClient;
