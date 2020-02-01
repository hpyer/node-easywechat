'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const Merge = require("merge");
const FileCache_1 = require("./Cache/FileCache");
class BaseApplicatioin {
    constructor(config = {}) {
        this.defaultConfig = {};
        this.userConfig = {};
        this.cache = null;
        if (new.target === BaseApplicatioin) {
            throw new Error('本接口不能实例化');
        }
        this.userConfig = config || {};
    }
    getConfig() {
        let base = {
            // https://www.npmjs.com/package/request#requestoptions-callback
            http: {
                timeout: 30000,
                baseUrl: 'https://api.weixin.qq.com/',
            },
        };
        return Merge(base, this.defaultConfig, this.userConfig);
    }
    registerProviders(providers = []) {
        [
            'Providers/ConfigServiceProvider',
            'Providers/LogServiceProvider',
            'Providers/RequestServiceProvider',
        ].forEach(provider => {
            try {
                let serviceClass = require(Path.resolve(__dirname + '/' + provider))['default'];
                serviceClass.register(this);
            }
            catch (e) {
                throw new Error('服务`' + provider + '`注册失败，错误：' + e.message);
            }
        });
        providers.forEach(provider => {
            try {
                let serviceClass = require(Path.resolve(__dirname + '/../' + provider + '/ServiceProvider'))['default'];
                serviceClass.register(this);
            }
            catch (e) {
                throw new Error('服务`' + provider + '`注册失败，错误：' + e.message);
            }
        });
    }
    rebind(id, value) {
        this.offsetUnset(id);
        this.offsetSet(id, value);
    }
    offsetUnset(id) {
        delete this[id];
    }
    offsetSet(id, value) {
        this[id] = value;
    }
    getCache() {
        if (this.cache) {
            return this.cache;
        }
        return this.cache = this.createDefaultCache();
    }
    createDefaultCache() {
        return new FileCache_1.default(this['config']['file_cache'] || {});
    }
}
exports.default = BaseApplicatioin;
;
