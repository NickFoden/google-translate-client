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

test("pass a bad api key", async () => {
  const params = { apiKey: "666" };
  const theClient = createClient(params);
  const data = await theClient("");
  expect(data).toStrictEqual({
    data: "Try another word or Double check your api key is valid",
  });
});
