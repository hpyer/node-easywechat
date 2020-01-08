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
Object.defineProperty(exports, "__esModule", { value: true });
const Merge = require("merge");
const BaseClient_1 = require("../../Core/BaseClient");
const Utils_1 = require("../../Core/Utils");
class Client extends BaseClient_1.default {
    constructor() {
        super(...arguments);
        this.message = {
            touser: '',
            template_id: '',
            url: '',
            data: {},
            miniprogram: '',
        };
        this.required = [
            'touser',
            'template_id',
        ];
    }
    setIndustry(industry_id1, industry_id2) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/template/api_set_industry', {
                json: true,
                body: {
                    industry_id1,
                    industry_id2,
                }
            });
        });
    }
    getIndustry() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/template/get_industry');
        });
    }
    addTemplate(template_id_short) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/template/api_add_template', {
                json: true,
                body: {
                    template_id_short,
                }
            });
        });
    }
    getPrivateTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/template/get_all_private_template');
        });
    }
    deletePrivateTemplate(template_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/template/del_private_template', {
                json: true,
                body: {
                    template_id,
                }
            });
        });
    }
    send(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = this.formatMessage(data);
            return yield this.httpPost('cgi-bin/message/template/send', {
                json: true,
                body: params
            });
        });
    }
    sendSubscription(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = this.formatMessage(data);
            return yield this.httpPost('cgi-bin/message/template/subscribe', {
                json: true,
                body: params
            });
        });
    }
    formatMessage(data) {
        let params = Merge({}, this.message, data);
        for (let key in params) {
            if (Utils_1.inArray(key, this.required) && !params[key] && !this.message[key]) {
                throw new Error(`Attribute "${key}" can not be empty!`);
            }
        }
        params['data'] = this.formatData(params['data'] || {});
        return params;
    }
    formatData(data) {
        let formatted = {}, value;
        for (let key in data) {
            value = {};
            if (Utils_1.isArray(data[key]) && data[key].length == 2) {
                value = {
                    value: data[key][0],
                    color: data[key][1],
                };
            }
            else if (Utils_1.isObject(data[key]) && data[key]['value']) {
                value = data[key];
            }
            else {
                value = {
                    value: data[key] + ''
                };
            }
            formatted[key] = value;
        }
        return formatted;
    }
}
exports.default = Client;
