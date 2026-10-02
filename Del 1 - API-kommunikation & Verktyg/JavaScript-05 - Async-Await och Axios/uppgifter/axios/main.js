"use strict"

const ul = document.querySelector("#user-list")

// =========================================================================
// UPPGIFT 1: GET-anrop (Hämta data) och skriv ut i listan
// =========================================================================
async function hämtaAnvändare() {
  try {
    // 1. DIN KOD HÄR:
    // Gör ett asynkront GET-anrop med axios.get() till:
    // 'https://typicode.com'
    // Kom ihåg att använda "await"!
    const response = null

    // 2. DIN KOD HÄR:
    // Axios sparar den färdiga datan i egenskapen .data.
    // Mappa (.map) ut användarnas namn till listobjekt (<li>) och lägg i ul.innerHTML.
  } catch (error) {
    // Axios fångar automatiskt upp felaktiga statuskoder (t.ex. 404 eller 500)
    console.error("Fel vid hämtning:", error.message)
  }
}

// =========================================================================
// UPPGIFT 2: POST-anrop (Skicka data) till servern
// =========================================================================
async function skapaNyAnvändare() {
  const nyAnvändare = {
    name: "Kalle Kula",
    email: "kalle@kula.se",
  }

  try {
    // 3. DIN KOD HÄR:
    // Skicka ett POST-anrop med axios.post() till samma URL som ovan.
    // Skicka med objektet 'nyAnvändare' som det andra argumentet.
    // Axios sätter 'Content-Type: application/json' helt automatiskt!
    const response = null

    // 4. DIN KOD HÄR:
    // Logga ut response.status (bör vara 201 Created) och response.data i konsolen.
  } catch (error) {
    console.error("Kunde inte spara användare:", error.message)
  }
}

function main() {
  // Starta funktionerna
  hämtaAnvändare()
  skapaNyAnvändare()
}
