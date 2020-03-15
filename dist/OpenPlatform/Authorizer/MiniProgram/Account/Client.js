'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../../Aggregate/Account/Client");
class Client extends Client_1.default {
    getBasicInfo() {
        return this.httpPostJson('cgi-bin/account/getaccountbasicinfo');
    }
    updateAvatar(mediaId, left = 0, top = 0, right = 0, bottom = 0) {
        let params = {
            head_img_media_id: mediaId,
            x1: left,
            y1: top,
            x2: right,
            y2: bottom,
        };
        return this.httpPostJson('cgi-bin/account/modifyheadimage', params);
    }
    updateSignature(signature) {
        return this.httpPostJson('cgi-bin/account/modifysignature', {
            signature: signature
        });
    }
}
exports.default = Client;
