'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = __importDefault(require("../../Core/BaseClient"));
const Utils_1 = require("../../Core/Utils");
class ContactWayClient extends BaseClient_1.default {
    create(type, scene, config) {
        let params = Utils_1.merge({
            type,
            scene,
        }, config);
        return this.httpPostJson('cgi-bin/externalcontact/add_contact_way', params);
    }
    get(configId) {
        return this.httpGet('cgi-bin/externalcontact/get_contact_way', {
            config_id: configId,
        });
    }
    update(configId, config) {
        let params = Utils_1.merge({
            config_id: configId,
        }, config);
        return this.httpPostJson('cgi-bin/externalcontact/update_contact_way', params);
    }
    delete(configId) {
        return this.httpGet('cgi-bin/externalcontact/del_contact_way', {
            config_id: configId,
        });
    }
}
exports.default = ContactWayClient;
