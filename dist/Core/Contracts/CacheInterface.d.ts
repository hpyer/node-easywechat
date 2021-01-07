export default abstract class CacheInterface {
    get(id: string): Promise<any>;
    has(id: string): Promise<boolean>;
    set(id: string, data?: any, lifeTime?: number): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
