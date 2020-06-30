import BaseClient from '../../../../Core/BaseClient';
export default class MiniProgramClient extends BaseClient {
    list(): Promise<any>;
    link(appId: string, notifyUsers?: Boolean, showProfile?: Boolean): Promise<any>;
    uplink(appId: string): Promise<any>;
}
