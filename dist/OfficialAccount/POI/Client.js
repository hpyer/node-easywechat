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
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpGet('cgi-bin/poi/getwxcategory');
        });
    }
    get(poi_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/poi/getpoi', {
                json: true,
                body: {
                    poi_id,
                }
            });
        });
    }
    list(begin = 0, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/poi/getpoilist', {
                json: true,
                body: {
                    begin,
                    limit,
                }
            });
        });
    }
    create(base_info) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/poi/addpoi', {
                json: true,
                body: {
                    business: {
                        base_info
                    },
                }
            });
        });
    }
    createAndGetId(base_info) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.create(base_info);
            return response && response['poi_id'] ? response['poi_id'] : '';
        });
    }
    update(poi_id, base_info) {
        return __awaiter(this, void 0, void 0, function* () {
            base_info['poi_id'] = poi_id;
            return yield this.httpPost('cgi-bin/poi/updatepoi', {
                json: true,
                body: {
                    business: {
                        base_info
                    },
                }
            });
        });
    }
    delete(poi_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('cgi-bin/poi/delpoi', {
                json: true,
                body: {
                    poi_id,
                }
            });
        });
    }
}
exports.default = Client;
