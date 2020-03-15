'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseApplication_1 = require("../Core/BaseApplication");
class Application extends BaseApplication_1.default {
    constructor(config = {}, prepends = {}, id = null) {
        super(config, prepends, id);
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
            'MiniProgram/SubscribeMessage',
            'MiniProgram/RealtimeLog',
            'MiniProgram/Search',
            // BaseService
            'BaseService/Media',
            'BaseService/ContentSecurity',
        ];
        super.registerProviders(providers);
    }
    // map to `base` module
    getPaidUnionid() {
        return this['base'].getPaidUnionid.apply(this, arguments);
    }
}
exports.default = Application;
;
