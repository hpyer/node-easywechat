import BaseClient from '../../Core/BaseClient';
export default class ActivityMessageClient extends BaseClient {
    createActivityId(): Promise<any>;
    updateMessage(activityId: string, state?: Number, params?: object): Promise<any>;
    protected formatParameters(params: object): Array<object>;
}
