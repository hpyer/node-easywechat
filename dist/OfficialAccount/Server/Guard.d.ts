import ServerGuard from '../../Core/ServerGuard';
export default class Guard extends ServerGuard {
    protected shouldReturnRawResponse(): Promise<boolean>;
}
