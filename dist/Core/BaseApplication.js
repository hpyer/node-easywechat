'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCache_1 = __importDefault(require("./Cache/FileCache"));
const Utils_1 = require("./Utils");
const Request_1 = __importDefault(require("./Http/Request"));
class BaseApplicatioin {
    constructor(config, prepends = {}, id = null) {
        this.defaultConfig = {};
        this.userConfig = {};
        this.id = null;
        /**
         * 缓存实例
         */
        this.cache = null;
        /**
         * 配置项
         */
        this.config = {};
        /**
         * 日志方法
         */
        this.log = null;
        /**
         * 请求实例
         */
        this.request = null;
        /**
         * 请求token
         */
        this.access_token = null;
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
    /**
     * 获取合并后的配置
     */
    getConfig() {
        let base = {
            // https://www.npmjs.com/package/request#requestoptions-callback
            http: {
                timeout: 30000,
                baseUrl: 'https://api.weixin.qq.com/',
            },
        };
        return Utils_1.merge(Utils_1.merge(base, this.defaultConfig), this.userConfig);
    }
    /**
     * 注册通用模块
     */
    registerCommonProviders() {
        this.offsetSet('config', function (app) {
            return app.getConfig();
        });
        this.log = function () {
            let args = arguments;
            args[0] = 'NodeEasywechat2: ' + args[0];
            return console.log.apply(null, arguments);
        };
        if (!this.request) {
            this.request = new Request_1.default;
        }
    }
    /**
     * 自定义服务模块（重新绑定）
     * @param id 服务模块的id，如：cache、request、access_token
     * @param value 自定义服务模块的实例，可以传入一个闭包，闭包会接收一个指向Application的参数
     */
    rebind(id, value) {
        this.offsetUnset(id);
        this.offsetSet(id, value);
    }
    /**
     * 解绑自定义服务模块
     * @param id 服务模块的id，如：cache、request、access_token
     * @param value 自定义服务模块的实例
     */
    offsetUnset(id) {
        delete this[id];
    }
    /**
     * 绑定自定义服务模块
     * @param id 服务模块的id，如：cache、request、access_token
     * @param value 自定义服务模块的实例，可以传入一个闭包，闭包会接收一个指向Application的参数
     */
    offsetSet(id, value) {
        if (Utils_1.isFunction(value)) {
            value = value(this);
        }
        this[id] = value;
    }
    /**
     * 获取cache实例
     */
    getCache() {
        if (this.cache) {
            return this.cache;
        }
        return this.cache = this.createDefaultCache();
    }
    /**
     * 生成默认的缓存实例（文件缓存）
     */
    createDefaultCache() {
        return new FileCache_1.default(this.config.file_cache || null);
    }
}
exports.default = BaseApplicatioin;
;
