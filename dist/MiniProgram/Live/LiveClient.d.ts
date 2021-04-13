import BaseClient from '../../Core/BaseClient';
export default class LiveClient extends BaseClient {
    getRooms(start?: number, limit?: number): Promise<any>;
    getPlaybacks(roomId: number, start?: number, limit?: number): Promise<any>;
}
