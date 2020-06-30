import Response from './Response';
export default class StreamResponse extends Response {
    save(directory: string, filename?: string): string;
    saveAs(directory: string, filename?: string): string;
    static buildFromResponse(res: Response): StreamResponse;
}
