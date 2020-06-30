import BaseApplication from '../../../OfficialAccount/Application';
import MiniProgramClient from './MiniProgram/MiniProgramClient';
export default class OfficialAccount extends BaseApplication {
    mini_program: MiniProgramClient;
    constructor(config?: Object, prepends?: Object, id?: String);
    registerProviders(): void;
}
