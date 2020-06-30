import BaseClient from '../Core/BaseClient';
export default class SandboxClient extends BaseClient {
    getKey(): Promise<string>;
    protected getCacheKey(): string;
}
