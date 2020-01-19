'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./Client");
const CoinClient_1 = require("./CoinClient");
const SubMerchantClient_1 = require("./SubMerchantClient");
const CodeClient_1 = require("./CodeClient");
const MovieTicketClient_1 = require("./MovieTicketClient");
const MemberCardClient_1 = require("./MemberCardClient");
const GeneralCardClient_1 = require("./GeneralCardClient");
const BoardingPassClient_1 = require("./BoardingPassClient");
const MeetingTicketClient_1 = require("./MeetingTicketClient");
const JssdkClient_1 = require("./JssdkClient");
class Card extends Client_1.default {
    constructor(app, accessToken = null) {
        super(app, accessToken);
        this.client = new Client_1.default(app, accessToken);
        this.coin = new CoinClient_1.default(app, accessToken);
        this.sub_merchant = new SubMerchantClient_1.default(app, accessToken);
        this.code = new CodeClient_1.default(app, accessToken);
        this.movie_ticket = new MovieTicketClient_1.default(app, accessToken);
        this.member_card = new MemberCardClient_1.default(app, accessToken);
        this.general_card = new GeneralCardClient_1.default(app, accessToken);
        this.boarding_pass = new BoardingPassClient_1.default(app, accessToken);
        this.meeting_ticket = new MeetingTicketClient_1.default(app, accessToken);
        this.jssdk = new JssdkClient_1.default(app, accessToken);
    }
}
exports.default = Card;
