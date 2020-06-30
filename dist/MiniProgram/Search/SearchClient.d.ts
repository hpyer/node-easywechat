import BaseClient from '../../Core/BaseClient';
export default class SearchClient extends BaseClient {
    submitPage(pages?: object): Promise<any>;
}
