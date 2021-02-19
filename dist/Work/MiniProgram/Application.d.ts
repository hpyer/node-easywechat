import BaseApplication from '../../MiniProgram/Application';
import AuthClient from './Auth/AuthClient';
export default class MiniProgram extends BaseApplication {
    auth: AuthClient;
    constructor(config?: Object, prepends?: Object, id?: String);
    registerProviders(): void;
}
