'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class MaterialClient extends BaseClient_1.default {
    uploadImage(path, type = 'icon') {
        return this.httpUpload('shakearound/material/add', {
            media: path,
        }, {}, {
            type: type.toLowerCase(),
        });
    }
}
exports.default = MaterialClient;
