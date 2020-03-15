'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("../../../OfficialAccount/Application");
class Application extends Application_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        let providers = [
            'OpenPlatform/Authorizer/Aggregate',
            'OpenPlatform/Authorizer/OfficialAccount/MiniProgram',
        ];
        super.registerProviders(providers);
    }
}
exports.default = Application;
;
