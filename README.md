# Tekoälychat (React + Gemini)

Chat-käyttöliittymä, joka on yhdistetty Googlen Gemini-kielimalliin. Käyttäjä voi esittää kysymyksiä, ja vastaukset näytetään muotoiltuina.

## Ominaisuudet

- Kysymysten lähetys Gemini API:lle ja vastausten näyttäminen
- Sivupalkki, jossa näkyvät aiemmat kysymykset
- Uuden keskustelun aloitus
- Vastausten muotoilu (lihavoinnit ja rivinvaihdot) ja kirjoitusanimaatio
- Sovelluksen tila jaetaan React Contextilla

## Teknologiat

React, Vite, Context API, Google Generative AI SDK (Gemini)

## Käynnistys

1. Hanki API-avain osoitteesta https://aistudio.google.com/apikey
2. Luo projektin juureen tiedosto `.env` mallin `.env.example` pohjalta:

   ```
   VITE_GEMINI_API_KEY=oma-avain
   ```

3. Käynnistä sovellus:

   ```bash
   npm install
   npm run dev
   ```

> Huom: API-avain päätyy selaimessa ajettavaan koodiin, joten sovellus on tarkoitettu paikalliseen käyttöön ja opiskeluun.
