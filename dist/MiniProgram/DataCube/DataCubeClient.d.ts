import BaseClient from '../../Core/BaseClient';
export default class DataCubeClient extends BaseClient {
    summaryTrend(from: string, to: string): Promise<any>;
    dailyVisitTrend(from: string, to: string): Promise<any>;
    weeklyVisitTrend(from: string, to: string): Promise<any>;
    monthlyVisitTrend(from: string, to: string): Promise<any>;
    visitDistribution(from: string, to: string): Promise<any>;
    dailyRetainInfo(from: string, to: string): Promise<any>;
    weeklyRetainInfo(from: string, to: string): Promise<any>;
    monthlyRetainInfo(from: string, to: string): Promise<any>;
    visitPage(from: string, to: string): Promise<any>;
    userPortrait(from: string, to: string): Promise<any>;
    protected query(api: string, from: string, to: string): Promise<any>;
}
