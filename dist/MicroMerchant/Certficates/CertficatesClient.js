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
const AES_1 = require("../../Core/AES");
const Utils_1 = require("../../Core/Utils");
const BaseClient_1 = __importDefault(require("../Core/BaseClient"));
class CertficatesClient extends BaseClient_1.default {
    get(returnRaw = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                sign_type: 'HMAC-SHA256',
                nonce_str: Utils_1.randomString(18),
            };
            if (returnRaw) {
                return yield this.requestRaw('risk/getcertficates', params);
            }
            let response = yield this.request('risk/getcertficates', params);
            if ('SUCCESS' !== response['return_code']) {
                throw new Error(`Failed to get certificate. return_code_msg: "${response['return_code']}(${response['return_msg']})".`);
            }
            if ('SUCCESS' !== response['result_code']) {
                throw new Error(`Failed to get certificate. result_err_code_desc: "${response['return_code']}(${response['err_code']}[${response['err_code_desc']}])".`);
            }
            let certificates = {};
            try {
                certificates = JSON.parse(response['certificates'])['data'][0];
            }
            catch (e) { }
            let ciphertext = this.decrypt(certificates['encrypt_certificate']);
            delete certificates['encrypt_certificate'];
            certificates['certificates'] = ciphertext;
            return certificates;
        });
    }
    decrypt(encryptCertificate) {
        if (!encryptCertificate)
            return null;
        return AES_1.AES_GCM.decrypt(Buffer.from(encryptCertificate['ciphertext'], 'base64'), this.app.config.apiv3_key, encryptCertificate['nonce'], encryptCertificate['associated_data'], 'aes-256-gcm').toString();
    }
}
exports.default = CertficatesClient;
