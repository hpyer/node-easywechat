import BaseClient from '../../Core/BaseClient';
export default class TagClient extends BaseClient {
    list(): Promise<any>;
    create(tagName: string, tagId?: number): Promise<any>;
    update(tagId: number, tagName: string): Promise<any>;
    delete(tagId: number): Promise<any>;
    get(tagId: number): Promise<any>;
    tagUsers(tagId: number, userList: Array<string>): Promise<any>;
    tagDepartments(tagId: number, partyList: Array<string>): Promise<any>;
    untagUsers(tagId: number, userList: Array<string>): Promise<any>;
    untagDepartments(tagId: number, partyList: Array<string>): Promise<any>;
    protected tagOrUntagUsers(endpoint: string, tagId: number, userList?: Array<string>, partyList?: Array<string>): Promise<any>;
}
