import BaseClient from '../../Core/BaseClient';
export default class NearbyPoiClient extends BaseClient {
    add(params?: object): Promise<any>;
    update(poiId: string, params?: object): Promise<any>;
    delete(poiId?: string): Promise<any>;
    list(page: number, pageRows: number): Promise<any>;
    setVisibility(poiId: string, status: number): Promise<any>;
}
