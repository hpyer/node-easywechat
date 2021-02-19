import ServerGuard from '../../Core/ServerGuard';
export default class Guard extends ServerGuard {
    protected validate(): Promise<this>;
    protected isSafeMode(): Promise<boolean>;
    protected shouldReturnRawResponse(): Promise<boolean>;
}
