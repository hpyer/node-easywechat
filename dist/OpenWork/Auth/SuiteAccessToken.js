'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseAccessToken_1 = __importDefault(require("../../Core/BaseAccessToken"));
class SuiteAccessToken extends BaseAccessToken_1.default {
    constructor() {
        super(...arguments);
        this.requestMethod = 'POST';
        this.tokenKey = 'suite_access_token';
        this.endpointToGetToken = 'cgi-bin/service/get_suite_token';
        this.cachePrefix = 'easywechat.kernel.suite_access_token.';
    }
    getCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                suite_id: this.app.config.suite_id,
                suite_secret: this.app.config.suite_secret,
                suite_ticket: yield this.app['suite_ticket'].getTicket(),
            };
        });
    }
}
exports.default = SuiteAccessToken;
