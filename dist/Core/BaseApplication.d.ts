import CacheInterface from './Contracts/CacheInterface';
import FileCache from './Cache/FileCache';
import Request from './Http/Request';
export default class BaseApplicatioin {
    protected defaultConfig: Object;
    protected userConfig: Object;
    protected id: String;
    /**
     * 缓存实例
     */
    cache: CacheInterface;
    /**
     * 配置
     */
    config: Object;
    /**
     * 日志方法
     */
    log: Function;
    /**
     * 请求实例
     */
    request: Request;
    constructor(config?: Object, prepends?: Object, id?: String);
    getId(): String;
    /**
     * 获取合并后的配置
     */
    getConfig(): Object;
    /**
     * 注册通用模块
     */
    registerCommonProviders(): void;
    /**
     * 自定义服务模块（重新绑定）
     * @param id 服务模块的id，如：cache、request、access_token
     * @param value 自定义服务模块的实例，可以传入一个闭包，闭包会接收一个指向Application的参数
     */
    rebind(id: string, value: any): void;
    /**
     * 解绑自定义服务模块
     * @param id 服务模块的id，如：cache、request、access_token
     * @param value 自定义服务模块的实例
     */
    offsetUnset(id: string): void;
    /**
     * 绑定自定义服务模块
     * @param id 服务模块的id，如：cache、request、access_token
     * @param value 自定义服务模块的实例，可以传入一个闭包，闭包会接收一个指向Application的参数
     */
    offsetSet(id: string, value: any): void;
    /**
     * 获取cache实例
     */
    getCache(): any;
    /**
     * 生成默认的缓存实例（文件缓存）
     */
    createDefaultCache(): FileCache;
}
