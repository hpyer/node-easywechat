'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../../Aggregate/Account/Client");
const Utils_1 = require("../../../../Core/Utils");
class Client extends Client_1.default {
    constructor(app, component) {
        super(app);
        this.component = null;
        this.component = component;
    }
    getFastRegistrationUrl(callbackUrl, copyWxVerify = true) {
        let query = {
            copy_wx_verify: copyWxVerify,
            component_appid: this.component['config']['app_id'],
            appid: this.app['config']['app_id'],
            redirect_uri: callbackUrl,
        };
        return 'https://mp.weixin.qq.com/cgi-bin/fastregisterauth?' + Utils_1.buildQueryString(query);
    }
    register(ticket) {
        return this.httpPostJson('cgi-bin/account/fastregister', {
            ticket: ticket,
        });
    }
}
exports.default = Client;
