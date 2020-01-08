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
    add(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('scan/product/v2/add', {
                json: true,
                body: {
                    product,
                }
            });
        });
    }
    update(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('scan/product/v2/add', {
                json: true,
                body: {
                    product,
                }
            });
        });
    }
    status(status_ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('scan/product/v2/status', {
                json: true,
                data: {
                    status_ticket,
                }
            });
        });
    }
    get(pid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('scan/product/v2/getinfo', {
                json: true,
                data: {
                    product: {
                        pid,
                    },
                }
            });
        });
    }
    list(context = '', page = 1, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpPost('scan/product/v2/getinfobypage', {
                json: true,
                body: {
                    page_context: context,
                    page_num: page,
                    page_size: size,
                }
            });
        });
    }
}
exports.default = Client;
