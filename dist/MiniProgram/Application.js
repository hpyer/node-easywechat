'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApplication_1 = require("../Core/BaseApplication");
class Application extends BaseApplication_1.default {
    constructor(config = {}) {
        super(config);
        let providers = [
            'MiniProgram/Auth',
            'MiniProgram/DataCube',
            'MiniProgram/AppCode',
            'MiniProgram/Server',
            'MiniProgram/TemplateMessage',
            'MiniProgram/CustomerService',
            'MiniProgram/UniformMessage',
            'MiniProgram/ActivityMessage',
            'MiniProgram/OpenData',
            'MiniProgram/Plugin',
            'MiniProgram/Base',
            'MiniProgram/Express',
            'MiniProgram/NearbyPoi',
            'MiniProgram/OCR',
            'MiniProgram/Soter',
            // BaseService
            'BaseService/Media',
            'BaseService/ContentSecurity',
        ];
        super.registerProviders(providers);
    }
    getPaidUnionid(openid, optional = {}) {
        return this['base'].getPaidUnionid(openid, optional);
    }
}
exports.default = Application;
;
