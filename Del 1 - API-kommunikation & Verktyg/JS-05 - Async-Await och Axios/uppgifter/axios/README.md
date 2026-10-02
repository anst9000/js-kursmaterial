# 🚀 JavaScript-04b – Async/Await och Axios

Välkommen till laborationen för modern asynkron JavaScript! I den här uppgiften ska du lära dig att gå ifrån gamla `.then()`-kedjor och istället skriva ren, linjär kod med `async/await`. Du kommer även att byta ut webbläsarens inbyggda `fetch()` mot branschens populäraste API-verktyg: **Axios**.

## 🎯 Syfte & Mål

- Förstå varför och hur vi använder `async` och `await`.
- Kunna hämta och skicka data till ett REST API med Axios via både GET och POST.
- Lära sig hantera API-fel på ett säkert sätt med `try/catch`.
- Se skillnaden på hur Axios hanterar JSON och felmeddelanden jämfört med inbyggda `fetch()`.

---

## 🛠️ Instruktioner för laborationen

1. Öppna mappen i din kodredigerare (t.ex. VS Code).
2. Starta `index.html` i din webbläsare (gärna med tillägget _Live Server_).
3. Öppna filen `main.js`. Där hittar du fyra tydliga instruktionspunkter:
   - **Uppgift 1:** Gör ett asynkront GET-anrop med `axios.get()` till JSONPlaceholder API:et för att hämta användare.
   - **Uppgift 2:** Använd `.map()` för att loopa ut namnen på skärmen inuti `<ul>`-listan.
   - **Uppgift 3:** Gör ett asynkront POST-anrop med `axios.post()` för att skicka upp ett nytt användarobjekt till servern.
   - **Uppgift 4:** Logga ut statuskoden (som bör visa `201 Created`) för att bekräfta att servern tog emot datan.

---

## 🔑 Lösningsförslag / Facit (`main.js`)

_Försök att lösa uppgiften själv först! Om du kör fast eller vill rätta din kod kan du jämföra med lösningen nedan:_

```javascript
const ul = document.querySelector("#user-list")

// =========================================================================
// UPPGIFT 1 & 2: GET-anrop (Hämta data) och skriv ut i listan
// =========================================================================
async function hämtaAnvändare() {
  try {
    // 1. GÖR GET-ANROP: Axios gör anropet och väntar på svar (await)
    const response = await axios.get("https://typicode.com")

    // 2. MAPPA UT DATA: Datan ligger färdigpackad i response.data (ingen .json() behövs!)
    const htmlStrang = response.data
      .map((user) => {
        return `<li>${user.name} (${user.email})</li>`
      })
      .join("")

    ul.innerHTML = htmlStrang
  } catch (error) {
    // Axios fångar automatiskt upp felaktiga statuskoder (t.ex. 404 eller 500)
    console.error("Fel vid hämtning:", error.message)
  }
}

// =========================================================================
// UPPGIFT 3 & 4: POST-anrop (Skicka data) till servern
// =========================================================================
async function skapaNyAnvändare() {
  const nyAnvändare = {
    name: "Kalle Kula",
    email: "kalle@kula.se",
  }

  try {
    // 3. GÖR POST-ANROP: Skicka med URL och objektet vi vill spara
    // Axios sätter 'Content-Type: application/json' helt automatiskt!
    const response = await axios.post("https://typicode.com", nyAnvändare)

    // 4. LOGGA STATUSKOD: Kontrollera svaret från servern
    console.log("--- Ny användare skapad på servern! ---")
    console.log("Statuskod:", response.status) // Bör visa 201
    console.log("Data från servern:", response.data)
  } catch (error) {
    console.error("Kunde inte spara användare:", error.message)
  }
}

// Starta funktionerna när skriptet laddas
hämtaAnvändare()
skapaNyAnvändare()
```
