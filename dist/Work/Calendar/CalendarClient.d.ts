import BaseClient from '../../Core/BaseClient';
export default class CalendarClient extends BaseClient {
    add(calendar: object): Promise<any>;
    update(id: number, calendar: object): Promise<any>;
    get(ids: Array<string>): Promise<any>;
    delete(id: string): Promise<any>;
}
