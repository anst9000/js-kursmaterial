"use strict"

const logglåda = document.querySelector("#logglåda")
function skrivUt(text) {
  logglåda.innerHTML += `<p>${text}</p>`
  logglåda.scrollTop = logglåda.scrollHeight // Auto-scrolla ner
}

// 1. Skapa en klass som heter Karaktär
class Karaktär {
  // DIN KOD HÄR:
  // Gör liv-variabeln privat med ett # (t.ex. #liv = 100)
  // Skapa en constructor som tar emot (namn, styrka)
  // Skapa metoden taSkada(mängd) som minskar det privata livet och loggar ut det
  // Skapa en getter för att hämta om karaktären lever (liv > 0)
  // Skapa en getter för att läsa av nuvarande liv
}

// 2. Skapa instanser
// DIN KOD HÄR: Skapa en hjälte och ett monster utifrån klassen

// 3. Koppla till knappen
document.querySelector("#btn-attack").addEventListener("click", () => {
  // DIN KOD HÄR:
  // Låt hjälten göra skada på monstret med taSkada()
  // Kontrollera om monstret är dött via din getter. Om det är dött, stäng av knappen!
})
