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
exports.EVENT_THIRD_FAST_REGISTERED = exports.EVENT_COMPONENT_VERIFY_TICKET = exports.EVENT_UPDATE_AUTHORIZED = exports.EVENT_UNAUTHORIZED = exports.EVENT_AUTHORIZED = void 0;
const ServerGuard_1 = __importDefault(require("../../Core/ServerGuard"));
const Encryptor_1 = __importDefault(require("../../Core/Encryptor"));
exports.EVENT_AUTHORIZED = 'authorized';
exports.EVENT_UNAUTHORIZED = 'unauthorized';
exports.EVENT_UPDATE_AUTHORIZED = 'updateauthorized';
exports.EVENT_COMPONENT_VERIFY_TICKET = 'component_verify_ticket';
exports.EVENT_THIRD_FAST_REGISTERED = 'notify_third_fasteregister';
class OpenWorkGuard extends ServerGuard_1.default {
    constructor() {
        super(...arguments);
        this.alwaysValidate = true;
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            return this;
        });
    }
    shouldReturnRawResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.app['request'].get('echostr')) != null;
        });
    }
    isSafeMode() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    decryptMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            let encryptor = new Encryptor_1.default(message['ToUserName'], this.app.config.token, this.app.config.aes_key);
            return encryptor.decrypt(message['Encrypt'], yield this.app['request'].get('msg_signature'), yield this.app['request'].get('nonce'), yield this.app['request'].get('timestamp'));
        });
    }
}
exports.default = OpenWorkGuard;
;
