'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("../../../MiniProgram/Application");
class Application extends Application_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        let providers = [
            'OpenPlatform/Authorizer/Aggregate',
            'OpenPlatform/Authorizer/MiniProgram/Code',
            'OpenPlatform/Authorizer/MiniProgram/Domain',
            'OpenPlatform/Authorizer/MiniProgram/Account',
            'OpenPlatform/Authorizer/MiniProgram/Setting',
            'OpenPlatform/Authorizer/MiniProgram/Tester',
        ];
        super.registerProviders(providers);
    }
}
exports.default = Application;
;
