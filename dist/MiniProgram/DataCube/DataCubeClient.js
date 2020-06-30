'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
class DataCubeClient extends BaseClient_1.default {
    summaryTrend(from, to) {
        return this.query('datacube/getweanalysisappiddailysummarytrend', from, to);
    }
    dailyVisitTrend(from, to) {
        return this.query('datacube/getweanalysisappiddailyvisittrend', from, to);
    }
    weeklyVisitTrend(from, to) {
        return this.query('datacube/getweanalysisappidweeklyvisittrend', from, to);
    }
    monthlyVisitTrend(from, to) {
        return this.query('datacube/getweanalysisappidmonthlyvisittrend', from, to);
    }
    visitDistribution(from, to) {
        return this.query('datacube/getweanalysisappidvisitdistribution', from, to);
    }
    dailyRetainInfo(from, to) {
        return this.query('datacube/getweanalysisappiddailyretaininfo', from, to);
    }
    weeklyRetainInfo(from, to) {
        return this.query('datacube/getweanalysisappidweeklyretaininfo', from, to);
    }
    monthlyRetainInfo(from, to) {
        return this.query('datacube/getweanalysisappidmonthlyretaininfo', from, to);
    }
    visitPage(from, to) {
        return this.query('datacube/getweanalysisappidvisitpage', from, to);
    }
    userPortrait(from, to) {
        return this.query('datacube/getweanalysisappiduserportrait', from, to);
    }
    query(api, from, to) {
        let params = {
            begin_date: from,
            end_date: to,
        };
        return this.httpPostJson(api, params);
    }
}
exports.default = DataCubeClient;
