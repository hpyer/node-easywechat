import BaseApplication from '../../Core/BaseApplication';
export default class VerifyTicket {
    protected app: BaseApplication;
    constructor(app: BaseApplication);
    setTicket(ticket: string): Promise<VerifyTicket>;
    getTicket(): Promise<string>;
    protected getCacheKey(): string;
}
