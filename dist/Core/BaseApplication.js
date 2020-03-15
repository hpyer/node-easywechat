'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const Merge = require("merge");
const FileCache_1 = require("./Cache/FileCache");
const Utils_1 = require("./Utils");
class BaseApplicatioin {
    constructor(config = {}, prepends = {}, id = null) {
        this.defaultConfig = {};
        this.userConfig = {};
        this.cache = null;
        this.id = null;
        if (new.target === BaseApplicatioin) {
            throw new Error('Can not create instance via BaseApplicatioin.');
        }
        if (Utils_1.isObject(prepends)) {
            for (let key in prepends) {
                this.offsetSet(key, prepends[key]);
            }
        }
        this.userConfig = config || {};
        this.id = id || null;
    }
    getId() {
        if (!this.id) {
            this.id = Utils_1.createHash(JSON.stringify(this.userConfig), 'md5');
        }
        return this.id;
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
                serviceClass.register.call(this, this);
            }
            catch (e) {
                throw new Error(`Fail to regist service '${provider}', erro: ${e.message}`);
            }
        });
        providers.forEach(provider => {
            try {
                let serviceClass = require(Path.resolve(__dirname + '/../' + provider + '/ServiceProvider'))['default'];
                serviceClass.register.call(this, this);
            }
            catch (e) {
                throw new Error(`Fail to regist service '${provider}', erro: ${e.message}`);
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
        if (Utils_1.isFunction(value)) {
            value = value.call(this, this);
        }
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
