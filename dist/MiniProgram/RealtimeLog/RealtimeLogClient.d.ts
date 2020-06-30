import BaseClient from '../../Core/BaseClient';
export default class RealtimeLogClient extends BaseClient {
    search(date: string, beginTime: number, endTime: number, options?: object): Promise<any>;
}
