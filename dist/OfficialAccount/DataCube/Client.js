'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const BaseClient_1 = require("../../Core/BaseClient");
const Merge = require("merge");
class Client extends BaseClient_1.default {
    userSummary(from, to) {
        return this.query('datacube/getusersummary', from, to);
    }
    userCumulate(from, to) {
        return this.query('datacube/getusercumulate', from, to);
    }
    articleSummary(from, to) {
        return this.query('datacube/getarticlesummary', from, to);
    }
    articleTotal(from, to) {
        return this.query('datacube/getarticletotal', from, to);
    }
    userReadSummary(from, to) {
        return this.query('datacube/getuserread', from, to);
    }
    userReadHourly(from, to) {
        return this.query('datacube/getuserreadhour', from, to);
    }
    userShareSummary(from, to) {
        return this.query('datacube/getusershare', from, to);
    }
    userShareHourly(from, to) {
        return this.query('datacube/getusersharehour', from, to);
    }
    upstreamMessageSummary(from, to) {
        return this.query('datacube/getupstreammsg', from, to);
    }
    upstreamMessageHourly(from, to) {
        return this.query('datacube/getupstreammsghour', from, to);
    }
    upstreamMessageWeekly(from, to) {
        return this.query('datacube/getupstreammsgweek', from, to);
    }
    upstreamMessageMonthly(from, to) {
        return this.query('datacube/getupstreammsgmonth', from, to);
    }
    upstreamMessageDistSummary(from, to) {
        return this.query('datacube/getupstreammsgdist', from, to);
    }
    upstreamMessageDistWeekly(from, to) {
        return this.query('datacube/getupstreammsgdistweek', from, to);
    }
    upstreamMessageDistMonthly(from, to) {
        return this.query('datacube/getupstreammsgdistmonth', from, to);
    }
    interfaceSummary(from, to) {
        return this.query('datacube/getinterfacesummary', from, to);
    }
    interfaceSummaryHourly(from, to) {
        return this.query('datacube/getinterfacesummaryhour', from, to);
    }
    cardSummary(from, to, condSource = 0) {
        let ext = {
            cond_source: condSource,
        };
        return this.query('datacube/getcardbizuininfo', from, to, ext);
    }
    freeCardSummary(from, to, condSource = 0, cardId = '') {
        let ext = {
            cond_source: condSource,
            card_id: cardId,
        };
        return this.query('datacube/getcardcardinfo', from, to, ext);
    }
    memberCardSummary(from, to, condSource = 0) {
        let ext = {
            cond_source: condSource,
        };
        return this.query('datacube/getcardmembercardinfo', from, to, ext);
    }
    memberCardSummaryById(from, to, cardId) {
        let ext = {
            card_id: cardId,
        };
        return this.query('datacube/getcardmembercarddetail', from, to, ext);
    }
    query(api, from, to, ext = {}) {
        let params = Merge({
            begin_date: from,
            end_date: to,
        }, ext);
        return this.httpPostJson(api, params);
    }
}
exports.default = Client;
