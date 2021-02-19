import BaseClient from '../../Core/BaseClient';
export default class StatisticsClient extends BaseClient {
    userBehavior(userIds: string[], from: string, to: string): Promise<any>;
}
