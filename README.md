## Translating all the words

![npm](https://img.shields.io/npm/dm/google-translate-client)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/google-translate-client)
![GitHub stars](https://img.shields.io/github/stars/nickfoden/google-translate-client?style=social)

**Will need api key from google cloud**

[https://cloud.google.com/docs/authentication/api-keys#creating_an_api_key](https://cloud.google.com/docs/authentication/api-keys#creating_an_api_key)

Getting started:

```javascript
npm i google-translate-client
```

Intialize the client

```javascript
"../myfiles/api/gcloud.js";

const googleTranslate = require("google-translate-client");

const translateClient = googleTranslate.createClient({
  apiKey: "googleApiKey",
});
```

Use the client

```javascript
import { translateClient } from "../myfiles/api/gcloud.js";
```

Takes 2 arguments - the text and the language you wish to translate to

```javascript
translateClient("ozark or stranger things ?", "es")
  .then((result) => console.dir(result))
  //result will be an object with a key data with the translated text and the detected source language
  .catch((err) => console.dir(err));
//err is an object and has a code and a message and few other keys google sends back
```

`result`

```javascript
// {data: {
//   translatedText: "¿Ozark o cosas más extrañas?",
//   detectedSourceLanguage: "en",
// }}
```

`err`

```javascript
// { code: 403,
//  message: "The request is missing a valid API key.",
//  errors: [{…}],
//  status: "PERMISSION_DENIED",
// }
```

Sweet now more people can interpret your content!
