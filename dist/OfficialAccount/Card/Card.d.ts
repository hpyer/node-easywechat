import BaseAccessToken from '../../Core/BaseAccessToken';
import BaseApplication from '../../Core/BaseApplication';
import BaseClient from "../../Core/BaseClient";
import Client from "./Client";
export default class Card extends Client {
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
    constructor(app: BaseApplication, accessToken?: BaseAccessToken);
}
