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
const BaseAccessToken_1 = __importDefault(require("../../../Core/BaseAccessToken"));
const Utils_1 = require("../../../Core/Utils");
class AccessToken extends BaseAccessToken_1.default {
    constructor(app, authCorpId, permanentCode, component) {
        super(app);
        this.requestMethod = 'POST';
        this.authCorpId = '';
        this.permanentCode = '';
        this.component = null;
        this.authCorpId = authCorpId;
        this.permanentCode = permanentCode;
        this.component = component;
    }
    getCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                auth_corpid: this.authCorpId,
                permanent_code: this.permanentCode,
            };
        });
    }
    getEndpoint() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'cgi-bin/service/get_corp_token?' + (0, Utils_1.buildQueryString)({
                suite_access_token: (yield this.component['suite_access_token'].getToken())['suite_access_token'],
            });
        });
    }
}
exports.default = AccessToken;
