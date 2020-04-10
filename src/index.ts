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

export const createClient = (params: ParamsObject) => {
  if (!params || !params.apiKey) {
    throw new Error("apiKey required in createClient");
  }

  const API_KEY = params.apiKey;

  const translate = (word = "cat", language = "es") => {
    const formattedWord = word.trim();
    const googUrl = `https://translation.googleapis.com/language/translate/v2?target=${language}&key=${API_KEY}&q=${formattedWord}`;
    return new Promise(function (resolve, reject) {
      fetch(googUrl)
        .then((data) => data.json())
        .then((result) => {
          if (result && result.data) {
            resolve({ data: result.data.translations[0] });
          } else {
            resolve({
              data: "Try another word or Double check your api key is valid",
            });
          }
        })
        .catch((err) => reject(Error(err)));
    });
  };

  return translate;
};
