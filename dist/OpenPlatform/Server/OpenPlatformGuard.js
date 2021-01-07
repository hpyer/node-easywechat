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
const Response_1 = __importDefault(require("../../Core/Http/Response"));
exports.EVENT_AUTHORIZED = 'authorized';
exports.EVENT_UNAUTHORIZED = 'unauthorized';
exports.EVENT_UPDATE_AUTHORIZED = 'updateauthorized';
exports.EVENT_COMPONENT_VERIFY_TICKET = 'component_verify_ticket';
exports.EVENT_THIRD_FAST_REGISTERED = 'notify_third_fasteregister';
class OpenPlatformGuard extends ServerGuard_1.default {
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerHandlers();
            let message = yield this.getMessage();
            if (message['InfoType']) {
                yield this.dispatch(message['InfoType'], message);
            }
            return new Response_1.default(Buffer.from(ServerGuard_1.default.SUCCESS_EMPTY_RESPONSE));
        });
    }
    registerHandlers() {
        this.on(exports.EVENT_AUTHORIZED, function () {
            return __awaiter(this, void 0, void 0, function* () { });
        });
        this.on(exports.EVENT_UNAUTHORIZED, function () {
            return __awaiter(this, void 0, void 0, function* () { });
        });
        this.on(exports.EVENT_UPDATE_AUTHORIZED, function () {
            return __awaiter(this, void 0, void 0, function* () { });
        });
        this.on(exports.EVENT_COMPONENT_VERIFY_TICKET, function (payload) {
            return __awaiter(this, void 0, void 0, function* () {
                if (payload['ComponentVerifyTicket']) {
                    this.app['verify_ticket'].setTicket(payload['ComponentVerifyTicket']);
                }
            });
        });
    }
}
exports.default = OpenPlatformGuard;
;
