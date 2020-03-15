'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApplication_1 = require("../Core/BaseApplication");
class Application extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
        this.defaultConfig = {
            app_id: '',
            secret: '',
        };
        let providers = [
            'BaseService/Jssdk',
            'BaseService/Qrcode',
            'BaseService/Media',
            'BaseService/Url',
            'BaseService/ContentSecurity',
        ];
        super.registerProviders(providers);
    }
}
exports.default = Application;
;
