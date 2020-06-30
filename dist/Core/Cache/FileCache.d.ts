import CacheInterface from '../Contracts/CacheInterface';
export default class FileCache implements CacheInterface {
    private options;
    private defaultOptions;
    constructor(options?: object);
    getCacheFile(id: string): string;
    getCacheContent(file: string): string;
    get(id: string): Promise<any>;
    has(id: string): Promise<boolean>;
    set(id: string, data?: any, lifeTime?: number): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
