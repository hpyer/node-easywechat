import BaseClient from '../../../../Core/BaseClient';
export default class SettingClient extends BaseClient {
    getAllCategories(): Promise<any>;
    addCategories(categories: Array<object>): Promise<any>;
    deleteCategories(firstId: number, secondId: number): Promise<any>;
    getCategories(): Promise<any>;
    updateCategory(category: object): Promise<any>;
    setNickname(nickname: string, idCardMediaId?: string, licenseMediaId?: string, otherStuffs?: Array<string>): Promise<any>;
    getNicknameAuditStatus(auditId: string): Promise<any>;
    isAvailableNickname(nickname: string): Promise<any>;
    getSearchStatus(): Promise<any>;
    setSearchable(): Promise<any>;
    setUnsearchable(): Promise<any>;
    getDisplayedOfficialAccount(): Promise<any>;
    setDisplayedOfficialAccount(appid?: string): Promise<any>;
    getDisplayableOfficialAccounts(page: number, num: number): Promise<any>;
}
