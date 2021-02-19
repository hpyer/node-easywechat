import BaseClient from '../../Core/BaseClient';
export default class LiveClient extends BaseClient {
    getUserLivingId(userId: string, beginTime: number, endTime: number, nextKey?: string, limit?: number): Promise<any>;
    getLiving(livingId: string): Promise<any>;
    getWatchStat(livingId: string, nextKey?: string): Promise<any>;
}
