import Client from './Client';
export default class BoardingPassClient extends Client {
    checkin(params: object): Promise<any>;
}
