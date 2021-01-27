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
const Handler_1 = __importDefault(require("./Handler"));
const Utils_1 = require("../../Core/Utils");
class ScannedHandler extends Handler_1.default {
    constructor() {
        super(...arguments);
        this.check = false;
        this.alert = '';
    }
    setAlert(message) {
        this.alert = message;
    }
    handle(closure) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof closure != 'function') {
                throw new Error('Should pass an closure function');
            }
            let result = yield closure.apply(this, [
                yield this.getMessage(),
                this.setFail,
                this.setAlert,
            ]);
            let attributes = {
                result_code: !this.alert && !this.fail ? this.SUCCESS : this.FAIL,
                err_code_des: this.alert,
            };
            if (!this.alert && Utils_1.isString(result)) {
                attributes['appid'] = this.app.config.app_id;
                attributes['mch_id'] = this.app.config.mch_id;
                attributes['nonce_str'] = Utils_1.randomString(16);
                attributes['prepay_id'] = result;
            }
            return yield this.respondWith(attributes, true).toResponse();
        });
    }
}
exports.default = ScannedHandler;
