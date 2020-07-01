import BaseClient from '../Core/BaseClient';
export default class SandboxClient extends BaseClient {
    /**
     * 获取沙盒环境的密钥
     */
    getKey(): Promise<string>;
    protected getCacheKey(): string;
}
