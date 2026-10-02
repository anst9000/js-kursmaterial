# 🚀 Terminalguide

## Starta och Leverera Projektet

Den här guiden visar hur du startar upp utvecklingsmiljön på din dator, hur du kör applikationen lokalt och hur du paketerar ditt projekt inför inlämning.

### För studenten - Starta utvecklingsservern

När du har laddat ner startfilerna eller skapat projektet, följer du dessa tre steg i terminalen (kommando-tolken) i VS Code för att börja koda.

- Steg 1 - Gå in i rätt mapp

Se till att din terminal står i samma mapp som filen package.json ligger i.

```bash
cd dashboard-app
```

- Steg 2 - Installera nödvändiga filer

Det första du måste göra i ett nytt projekt är att ladda ner alla React- och Vite-filer som behövs. Detta skapar mappen node_modules.

```bash
npm install
```

- Steg 3 - Starta servern

Nu drar vi igång den lokala utvecklingsservern.

```bash
npm run dev
```

Vad händer nu?
Terminalen kommer att starta upp och ge dig en lokal adress, vanligtvis http://localhost:5173/. Håll in Ctrl (eller Cmd på Mac) och klicka på länken för att öppna appen i din webbläsare. Sidan kommer nu att uppdateras live i webbläsaren varje gång du sparar en fil i VS Code.

### För studenten - Inför Inlämning

När du är helt klar med din kod och ska lämna in uppgiften är det en sak som är extremt viktig:

> ⚠️ Lämna **ALDRIG** in mappen node_modules! ⚠️

Den mappen innehåller tusentals filer och är alldeles för stor för att skickas eller laddas upp. Läraren kommer ändå att köra npm install på sin egen dator för att återskapa den.

Hur du förbereder inlämningen:

- Stäng av utvecklingsservern i terminalen genom att trycka Ctrl + C.
- I din filhanterare på datorn, högerklicka på din projektmapp (dashboard-app) och välj Skapa ZIP-arkiv (eller Skicka till komprimerad mapp).
- Se till att .zip-filen inte innehåller node_modules. (Om du använder ett Git-repo sköts detta automatiskt via .gitignore-filen).
- Lämna in din ZIP-fil enligt lärarens anvisningar.

### 🔑 För läraren

Rättning och Testkörning
När du får in en students ZIP-fil gör du så här för att testa koden på din egen dator:

- Packa upp studentens ZIP-fil i en valfri mapp.
- Öppna mappen i VS Code och öppna en ny terminal.
- Kör installationskommandot för att ladda ner de saknade filerna:

```bash
npm install
```

- Starta studentens applikation för att testa funktionaliteten

```bash
npm run dev
```

- Öppna länken i webbläsaren och kontrollera att sökningen, API-hämtningen, LocalStorage och .reduce()-statistiken fungerar som förväntat!
