import Jssdk from '../../BaseService/Jssdk/JssdkClient';
export default class JssdkClient extends Jssdk {
    getTicket(refresh?: boolean, type?: string): Promise<any>;
    assign(cards: Array<object>): Promise<string>;
    attachExtension(cardId: string, extension?: object): Promise<object>;
}
