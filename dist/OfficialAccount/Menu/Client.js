'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class Client extends BaseClient_1.default {
    list() {
        return this.httpGet('cgi-bin/menu/get');
    }
    current() {
        return this.httpGet('cgi-bin/get_current_selfmenu_info');
    }
    create(button, matchrule = null) {
        if (matchrule) {
            return this.httpPostJson('cgi-bin/menu/addconditional', {
                button,
                matchrule,
            });
        }
        return this.httpPostJson('cgi-bin/menu/create', {
            button,
        });
    }
    delete(menuid) {
        if (menuid) {
            return this.httpPostJson('cgi-bin/menu/delconditional', {
                menuid,
            });
        }
        return this.httpGet('cgi-bin/menu/delete');
    }
    match(user_id) {
        return this.httpPostJson('cgi-bin/menu/trymatch', {
            user_id,
        });
    }
}
exports.default = Client;
