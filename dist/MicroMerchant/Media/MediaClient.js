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
const Utils_1 = require("../../Core/Utils");
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
class MediaClient extends BaseClient_1.default {
    upload(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!file) {
                throw new Error(`File does not exist, or the file is unreadable: '${file}'`);
            }
            let form = {
                media_hash: yield (0, Utils_1.md5File)(file),
                sign_type: 'HMAC-SHA256',
            };
            return this.httpUpload('secapi/mch/uploadmedia', {
                media: file
            }, form);
        });
    }
}
exports.default = MediaClient;
