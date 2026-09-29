// =========================================================================
// LABB 09: KUNDVAGNEN (Event Delegation)
// Instruktion: Sätt EN händelselyssnare på föräldra-elementet (#kundvagn-lista).
// Fånga upp klicket och kontrollera om användaren klickade på en 'Ta bort'-knapp.
// =========================================================================

const vagnLista = document.querySelector("#kundvagn-lista")

// 1. Lägg till en händelselyssnare på hela UL-listan (vagnLista)
vagnLista.addEventListener("click", (event) => {
  // DIN KOD HÄR:
  // a) Kontrollera om event.target innehåller klassen 'delete-btn'
  // b) Om ja, hitta raden (parentElement) och plocka bort den från DOM:en med .remove()
})
