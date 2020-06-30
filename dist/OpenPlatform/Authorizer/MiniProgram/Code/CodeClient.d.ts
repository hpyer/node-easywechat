import BaseClient from '../../../../Core/BaseClient';
export default class CodeClient extends BaseClient {
    commit(templateId: string, extJson: string, version: string, description: string): Promise<any>;
    getQrCode(path: string): Promise<any>;
    getCategory(): Promise<any>;
    getPage(): Promise<any>;
    submitAudit(itemList: Array<string>, feedbackInfo?: string, feedbackStuff?: string): Promise<any>;
    getAuditStatus(auditId: string): Promise<any>;
    getLatestAuditStatus(): Promise<any>;
    release(): Promise<any>;
    withdrawAudit(): Promise<any>;
    rollbackRelease(): Promise<any>;
    changeVisitStatus(action: string): Promise<any>;
    grayRelease(grayPercentage: string): Promise<any>;
    revertGrayRelease(): Promise<any>;
    getGrayRelease(): Promise<any>;
    getSupportVersion(): Promise<any>;
    setSupportVersion(version: string): Promise<any>;
    queryQuota(): Promise<any>;
    speedupAudit(auditId: string): Promise<any>;
}
