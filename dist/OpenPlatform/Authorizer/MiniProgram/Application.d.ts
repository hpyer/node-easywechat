import BaseApplication from '../../../MiniProgram/Application';
import CodeClient from './Code/CodeClient';
import DomainClient from './Domain/DomainClient';
import AccountClient from './Account/AccountClient';
import SettingClient from './Setting/SettingClient';
import TesterClient from './Tester/TesterClient';
export default class MiniProgram extends BaseApplication {
    code: CodeClient;
    domain: DomainClient;
    account: AccountClient;
    setting: SettingClient;
    tester: TesterClient;
    constructor(config?: Object, prepends?: Object, id?: String);
    registerProviders(): void;
}
