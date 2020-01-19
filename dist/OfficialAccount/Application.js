'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApplication_1 = require("../Core/BaseApplication");
class Application extends BaseApplication_1.default {
    constructor(config = {}) {
        super(config);
        this.defaultConfig = {
            app_id: '',
            secret: '',
            oauth: {
                scope: 'snsapi_userinfo',
                callback: '',
            },
        };
        let providers = [
            'OfficialAccount/Auth',
            'OfficialAccount/Server',
            'OfficialAccount/User',
            'OfficialAccount/OAuth',
            'OfficialAccount/Menu',
            'OfficialAccount/TemplateMessage',
            'OfficialAccount/Material',
            'OfficialAccount/CustomerService',
            'OfficialAccount/Semantic',
            'OfficialAccount/DataCube',
            'OfficialAccount/POI',
            'OfficialAccount/AutoReply',
            'OfficialAccount/Broadcasting',
            'OfficialAccount/Card',
            'OfficialAccount/Device',
            'OfficialAccount/ShakeAround',
            'OfficialAccount/Store',
            'OfficialAccount/Comment',
            'OfficialAccount/Base',
            'OfficialAccount/OCR',
            'OfficialAccount/Goods',
            // BaseService
            'BaseService/Jssdk',
            'BaseService/Media',
            'BaseService/Qrcode',
            'BaseService/Url',
        ];
        super.registerProviders(providers);
    }
}
exports.default = Application;
;
