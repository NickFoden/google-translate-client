/**
 * Create a client
 * const googleTranslate = require("google-translate-client");
 * const translateClient = googleTranslate.createClient({
 *  apiKey: 'googleApiKey',
 * })
 */
interface ParamsObject {
    apiKey: string;
}
export declare const createClient: (params: ParamsObject) => (word?: string, language?: string) => Promise<unknown>;
export {};
