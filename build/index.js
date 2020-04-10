'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Create a client
 * const googleTranslate = require("google-translate-client");
 * const translateClient = googleTranslate.createClient({
 *  apiKey: 'googleApiKey',
 * })
 */
var createClient = function (params) {
    if (!params || !params.apiKey) {
        throw new Error("apiKey required in createClient");
    }
    var API_KEY = params.apiKey;
    var translate = function (word, language) {
        if (word === void 0) { word = "cat"; }
        if (language === void 0) { language = "es"; }
        var formattedWord = word.trim();
        var googUrl = "https://translation.googleapis.com/language/translate/v2?target=" + language + "&key=" + API_KEY + "&q=" + formattedWord;
        return new Promise(function (resolve, reject) {
            fetch(googUrl)
                .then(function (data) { return data.json(); })
                .then(function (result) {
                if (result && result.data) {
                    resolve({ data: result.data.translations[0] });
                }
                else {
                    resolve({
                        data: "Try another word or Double check your api key is valid",
                    });
                }
            })
                .catch(function (err) { return reject(Error(err)); });
        });
    };
    return translate;
};

exports.createClient = createClient;
//# sourceMappingURL=index.js.map
