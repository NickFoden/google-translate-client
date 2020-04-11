import { createClient } from "../index";
import GoogleApiKey from "../../secrets";
import "isomorphic-fetch";

test("forget to pass api key", () => {
  expect(createClient).toThrowError();
});

test("Function defaults to cat translation to spanish", async () => {
  const params = { apiKey: GoogleApiKey };
  const theClient = createClient(params);
  const data = await theClient();
  expect(data).toStrictEqual({
    data: { detectedSourceLanguage: "en", translatedText: "gato" },
  });
});

test("Function translate cow to spanish", async () => {
  const params = { apiKey: GoogleApiKey };
  const theClient = createClient(params);
  const data = await theClient("cow", "es");
  expect(data).toStrictEqual({
    data: { detectedSourceLanguage: "en", translatedText: "vaca" },
  });
});

test("Function translate sky in italian", async () => {
  const params = { apiKey: GoogleApiKey };
  const theClient = createClient(params);
  const data = await theClient("cow", "it");
  expect(data).toStrictEqual({
    data: { detectedSourceLanguage: "en", translatedText: "mucca" },
  });
});
