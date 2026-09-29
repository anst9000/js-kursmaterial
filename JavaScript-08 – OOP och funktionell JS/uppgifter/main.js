"use strict"

// 1. Skapa en funktion som heter skapaRäknare
function skapaRäknare() {
  // DIN KOD HÄR:
  // Skapa en lokal variabel 'antal' som sätts till 0 (detta blir ert Closure!)
  // Returnera en funktion som ökar 'antal' med 1 varje gång den körs, och ger tillbaka det nya värdet.
}

// 2. Initiera räknaren
const minRäknare = skapaRäknare()

const siffra = document.querySelector("#siffra")
const knapp = document.querySelector("#btn-klick")

// 3. Koppla till knappen
knapp.addEventListener("click", () => {
  // DIN KOD HÄR:
  // Anropa minRäknare() för att få det uppdaterade numret.
  // Ändra siffra.textContent till det nya numret.
})
