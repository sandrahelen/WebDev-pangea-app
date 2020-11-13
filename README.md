# Dokumentasjon gruppe 70 prosjekt 4A

For å kjøre prosjektet må man først clone prosjektet med 

`git clone https://gitlab.stud.idi.ntnu.no/it2810-h20/team-70/prosjekt4a.git`

Prosjektet heter prosjekt4a, der hovedmappene er backend og frontend

Start serveren i backend ved å gå inn i backend 

`cd backend/` 

`npm install`

`npm start` 

Da skal det i terminalen stå at serveren kjører på http://localhost:4000
Naviger til frontend og start den der

`cd ../frontend/` 

`npm install` 

 `npm start`

Appen skal nå åpne Expo Client i nettleseren. Her kan du velge hvordan du ønsker å kjøre appen. Vi anbefaler å kjøre på egen mobil eller bruke IOS/Android simulator.

# Pangea 

Vår nettside er inspirert av superkontinentet Pangea og fungerer som en reisenettside. Her kan man søke og filtrere blant alle land i verden.

For å se en oversikt over alle land i verden trykker man på Home i navigasjonsbaren nederst. Filtrering gjøres ved å velge hvilket kontinent man er interessert i. Sortering av land kan gjøres ved å trykke på pilen opp/ned ved siden av Country, slik at landene blir sortert alfabetisk stigende eller synkende. 

Er det et av landene som virker ekstra interessant kan man trykke på navnet for å få mer informasjon. Man blir da sendt til Info og kan lese mer her. 


# Navigasjon

Prosjektet er delt i 2, `frontend`og `backend`. Frontend er tett koblet opp mot brukeren. Databasen er koblet sammen med backend. Databasen ligger lagret på en virtuell maskin. 


# Teknologi

I vårt prosjekt har vi brukt MERN-teknologistakk. Mern består av Mongodb, Express, React, Node.js.

Mye kode og teknologi er gjenbrukt fra prosjekt 3. Hele backend, med noen forbedringer i søk basert på tilbakemeldingene, er gjenbrukt i dette prosjektet. Nytt i dette prosjektet er bruk av Expo-Client og React Native i frontend. 

I tillegg har vi brukt andre biblioteker og tredjepartskomponenter som react-native-elements, react-native-paper og react-navigation.


## Apollo-server

I backend bruker vi apollo-server som GraphQL server, hovedgrunnen til at vi valgte apollo-server var på grunn av GrapgQL. Apollo-server er i tillegg veldig godt dokumenter og opens-source, noen som gjorde jobben lettere for oss. Apollo-server er kompatibel med alle graphQL-klienter, men kanskje spesielt med Apollo client som vil valgte å bruke i frontend. For oss var det viktig å velge teknologier som går godt sammen og som er godt dokumenter.

## GraphQL

Vi valgte å bruke graphQL i motsetning til REST fordi det er lett å bruke og har mange fordeler. Det er for det første nytt og kom for å løse noen av problemene med REST, som overflødig data. GrapgQL har et sterkt typet system som gjør det mer robust ved å definere hvordan en klient kan aksessere data. Med GrapgQL får man også tilgang til playground på localhost:port/graphql slik at man kan teste at data hentes riktig fra databasen.


## Mongodb

Grunnen til at vi valgte å bruke mongoDB er rett og slett at noen anbefalte det. Kombinasjonen MongoDB, React, Express og Node er mye brukt og virket detfor som det beste valget for oss. MongoDB er en NoSQL database i motsetning til for eksempel MySQL. Det betyr at man ikke kan bruke SQL til å hente data fra databasen. 
Vi brukte i tillegg mongoose til mongoDB objekt-modellering. 

## Apollo-client

Hovedgrunnen til at vi valgte Apollo-client i frontend var fordi vi allerede hadde tatt i bruk Apollo-server i backend. Denne er tatt i bruk på samme måte som react appen fra prosjekt 3. 

## React Native
Hele prosjektet er basert på React Native med Expo Client, og Typescript er brukt til implementasjon. Prosjektet ble opprettet ved å først installere Expo Client med kommandoen `npm install --global expo-cli`. Deretter opprettet vi et nytt prosjekt med kommandoen `expo init prosjekt4a` og valgte å sette opp med blank workflow i TypeScript. Prosjektet ble dermed satt opp med en grunnleggende struktur for frontend. Backend kopierte vi fra prosjekt 3.
Alle komponentene vi har er skrevet som funksjonelle komponenter. Tidligere var funksjonelle komponenter uten tilstand, altså stateless, men med hooks kan man bruke useState og useEffect til å oppnå samme tilstandshåndtering som i en klassekomponent. Funksjonelle komponenter er korte, effektive og leselige.

# Git
Gjennom prosjektet har all kodedeling gått gjennom gitlab der vi har benyttet oss av issues og brancher på en hensiktsmessig måte. Hvert issue har fått en label som “to do”, “doing” og “review”. Når et issue er ferdig legges det under review og et annet gruppemedlem ser gjennom koden. Dette er for å sikre kvalitet og at alle på gruppa skal ha oversikt over hva som er blitt gjort. Hvert issue har fått sin egen branch, så langt det det er hensiktsmessig, for å unngå problemer ved merging av brancher. Vi har valgt å ha mange små issues, enn få store, fordi det har gjort arbeidsfordeling og samarbeid lettere. I prosjekt 3 var vi 3 som jobbet sammen, mens nå er vi bare 2. Likevel har vi opprettholdt det gode samarbeidet og brukt git som et nyttig verktøy for å holde oversikt over status i prosjektet. 

# Testing
Kravet for testing i dette prosjektet har vært manuell e2e testing. Denne måten å teste på har vi brukt kontinuerlig gjennom prosjektet. Siden backend allerede var ferdig fra forrige prosjekt, lå hovedfokuset i dette prosjektet i frontend med en react native app. Hver gang vi implementerte noe nytt eller forbedret noe, testet vi hvordan det så ut i appen og om det fungerte optimalt. 

Følgende funksjonalitet kan testes:

Når appen åpnes kommer brukeren inn på Home skjermen. Det er synlig ved at bakgrunnen til Home ikonet, en globus, får mørk bakgrunn. På toppen av skjermen er en overskrift med PANGEA. Innholdet på Home er en tabell over land i verden. Det er 10 og 10 land som vises samtidig og brukeren kan bla mellom sidene. 

Under overskriften på Home vises en søke bar. Her kan en bruker søke med ord og bokstaver for å finne land som inneholder søkeordet. Ved søk på “way” vil Norway komme opp (men siden søk er case sensitiv så vil ikke “Way” ha noe resultat). 

Knappene under søkefunksjonaliteten lar brukeren filtrere country dataen. Dersom knappen Asia trykkes, vil kun land fra Asia vises. For å vise alle mulige land igjen, må knappen for Alle land trykkes. 

Ved siden av Country i tabellen er den en liten pil som enten går oppover eller nedover. Dersom pilen viser oppover er landene sortert alfabetisk, men en synkende pil gjør det motsatte. For å endre hvilken retning pilen skal gå kan brukeren trykke på Country knappen der pilen er. 

Dersom en bruker vil vite mer informasjon om et land kan den trykke på raden med det landet. Brukeren vil da bli sendt til Info siden, og her få mer informasjon om landet. Informasjon som kommer her er navn på landet, kontinent, hovedsted og nasjonalrett. 

I prosjekt 3 brukte vi en land database som hadde noen få mangler med tanke på at noen felt hadde null verdi. Dette kan være greit å ha i bakhodet dersom for eksempel en nasjonalrett ikke har en verdi. Likevel kan det være slik at det valgte landet faktisk ikke har en nasjonalrett. 


