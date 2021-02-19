import BaseClient from '../../Core/BaseClient';
export default class ScheduleClient extends BaseClient {
    add(schedule: object): Promise<any>;
    update(id: string, schedule: object): Promise<any>;
    get(ids: Array<string>): Promise<any>;
    getByCalendar(calendarId: string, offset?: number, limit?: number): Promise<any>;
    delete(id: string): Promise<any>;
}
