import BaseClient from '../../Aggregate/Account/Client';
import BaseApplicatioin from '../../../../Core/BaseApplication';
import OpenPlatformApplication from '../../../Application';
export default class Client extends BaseClient {
    protected component: OpenPlatformApplication;
    constructor(app: BaseApplicatioin, component: OpenPlatformApplication);
    getFastRegistrationUrl(callbackUrl: string, copyWxVerify?: Boolean): string;
    register(ticket: string): Promise<any>;
}
