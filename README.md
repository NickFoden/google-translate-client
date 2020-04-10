## Translating all the words



**Will need api key from google cloud** 

[https://cloud.google.com/docs/authentication/api-keys#creating_an_api_key](https://cloud.google.com/docs/authentication/api-keys#creating_an_api_key)

Getting started:

```javascript
npm i google-translate-client
```

Intialize the client

```javascript

"../myfiles/api/gcloud.js"

const googleTranslate = require("google-translate-client");

const translateClient = googleTranslate.createClient({
  apiKey: 'googleApiKey',
})

```

Use the client

```javascript
import {translateClient} from "../myfiles/api/gcloud.js"

```

Takes 2 arguments - the text and the language you wish to translate to

```javascript
   translateClient("ozark or stranger things ?", "es").then(
      (result) => console.dir(result)
      //result has a key data with the translated text and the detected source language
      // {data: {
      //   translatedText: "¿Ozark o cosas más extrañas?",
      //   detectedSourceLanguage: "en",
      // }}
    );
```

Sweet now more people can interpret your content!
