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
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    categories() {
        return this.httpGet('cgi-bin/poi/getwxcategory');
    }
    get(poi_id) {
        return this.httpPostJson('cgi-bin/poi/getpoi', {
            poi_id,
        });
    }
    list(begin = 0, limit = 10) {
        return this.httpPostJson('cgi-bin/poi/getpoilist', {
            begin,
            limit,
        });
    }
    create(base_info) {
        return this.httpPostJson('cgi-bin/poi/addpoi', {
            business: {
                base_info
            },
        });
    }
    createAndGetId(base_info) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.create(base_info);
            return res && res['poi_id'] ? res['poi_id'] : '';
        });
    }
    update(poi_id, base_info) {
        base_info['poi_id'] = poi_id;
        return this.httpPostJson('cgi-bin/poi/updatepoi', {
            business: {
                base_info
            },
        });
    }
    delete(poi_id) {
        return this.httpPostJson('cgi-bin/poi/delpoi', {
            poi_id,
        });
    }
}
exports.default = Client;
