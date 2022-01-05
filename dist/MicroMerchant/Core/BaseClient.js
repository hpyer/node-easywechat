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
const BaseClient_1 = __importDefault(require("../../Payment/Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
const RSA_1 = __importDefault(require("../../Core/RSA"));
const fs_1 = __importDefault(require("fs"));
const form_data_1 = __importDefault(require("form-data"));
class BaseClient extends BaseClient_1.default {
    httpUpload(url, files = {}, form = {}, query = {}, returnResponse = false) {
        let formData = new form_data_1.default;
        for (let name in files) {
            if ((0, Utils_1.isString)(files[name])) {
                formData.append(name, fs_1.default.createReadStream(files[name]));
            }
            else {
                formData.append(name, files[name]);
            }
        }
        for (let name in form) {
            formData.append(name, form[name]);
        }
        return this.doRequest({
            url,
            data: formData,
            method: 'POST',
            params: query,
        });
    }
    request(endpoint, params = {}, method = 'post', options = {}, returnResponse = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let base = {
                mch_id: this.app.config.mch_id,
            };
            let localParams = (0, Utils_1.merge)((0, Utils_1.merge)(base, this.prepends()), params);
            let secretKey = yield this.app.getKey();
            localParams['sign'] = (0, Utils_1.makeSignature)(localParams, secretKey, localParams['sign_type'] || 'MD5');
            let payload = (0, Utils_1.merge)((0, Utils_1.merge)({}, options), {
                url: endpoint,
                method,
                responseType: 'text',
                data: (0, Utils_1.buildXml)(localParams)
            });
            let response = yield this.doRequest(payload);
            if (returnResponse) {
                return response;
            }
            else {
                let body = response.data;
                try {
                    body = yield (0, Utils_1.parseXml)(body);
                }
                catch (e) { }
                return body;
            }
        });
    }
    processParams(params) {
        let serial_no = this.app.config.serial_no;
        if (serial_no == undefined || serial_no == null) {
            throw new Error('Config `serial_no` connot be empty.');
        }
        let certificate = this.app.config.certificate;
        if (certificate == undefined || certificate == null) {
            throw new Error('Config `certificate` connot be empty.');
        }
        let rsa = new RSA_1.default;
        rsa.setPublicKey(certificate);
        let newParams = (0, Utils_1.merge)({}, params);
        newParams['cert_sn'] = serial_no;
        let sensitive_fields = this.getSensitiveFieldsName();
        for (let k in newParams) {
            if ((0, Utils_1.inArray)(k, sensitive_fields)) {
                newParams[k] = rsa.encrypt(newParams[k]);
            }
        }
        return newParams;
    }
    getSensitiveFieldsName() {
        return [
            'id_card_name',
            'id_card_number',
            'account_name',
            'account_number',
            'contact',
            'contact_phone',
            'contact_email',
            'legal_person',
            'mobile_phone',
            'email',
        ];
    }
}
;
exports.default = BaseClient;
