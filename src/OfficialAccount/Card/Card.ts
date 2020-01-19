'use strict';

import BaseAccessToken from '../../Core/BaseAccessToken';
import BaseApplication from '../../Core/BaseApplication';
import BaseClient from "../../Core/BaseClient";
import Client from "./Client";
import CoinClient from "./CoinClient";
import SubMerchantClient from "./SubMerchantClient";
import CodeClient from "./CodeClient";
import MovieTicketClient from "./MovieTicketClient";
import MemberCardClient from "./MemberCardClient";
import GeneralCardClient from "./GeneralCardClient";
import BoardingPassClient from "./BoardingPassClient";
import MeetingTicketClient from "./MeetingTicketClient";
import JssdkClient from "./JssdkClient";

export default class Card extends Client
{
  client: BaseClient;
  coin: BaseClient;
  sub_merchant: BaseClient;
  code: BaseClient;
  movie_ticket: BaseClient;
  member_card: BaseClient;
  general_card: BaseClient;
  boarding_pass: BaseClient;
  meeting_ticket: BaseClient;
  jssdk: BaseClient;

  constructor(app: BaseApplication, accessToken: BaseAccessToken = null)
  {
    super(app, accessToken);

    this.client = new Client(app, accessToken);
    this.coin = new CoinClient(app, accessToken);
    this.sub_merchant = new SubMerchantClient(app, accessToken);
    this.code = new CodeClient(app, accessToken);
    this.movie_ticket = new MovieTicketClient(app, accessToken);
    this.member_card = new MemberCardClient(app, accessToken);
    this.general_card = new GeneralCardClient(app, accessToken);
    this.boarding_pass = new BoardingPassClient(app, accessToken);
    this.meeting_ticket = new MeetingTicketClient(app, accessToken);
    this.jssdk = new JssdkClient(app, accessToken);
  }

}
