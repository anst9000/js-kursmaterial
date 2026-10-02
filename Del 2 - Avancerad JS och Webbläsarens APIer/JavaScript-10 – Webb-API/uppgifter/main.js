// =========================================================================
// LABB 10: ANTECKNINGSBLOCKET (LocalStorage)
// Instruktion: Ladda sparad text när sidan startar. Lyssna sedan på när
// användaren skriver och spara varje bokstav automatiskt till LocalStorage.
// =========================================================================

const textfalt = document.querySelector("#textfält")
const statusText = document.querySelector("#status")

// 1. DIN KOD HÄR: Hämta eventuell sparad text från LocalStorage ('min_anteckning')
// Om texten finns, sätt textfalt.value till det sparade värdet.

// 2. Lyssna på 'input'-händelsen på textfältet
textfalt.addEventListener("input", () => {
  // DIN KOD HÄR:
  // a) Spara det aktuella värdet (textfalt.value) till LocalStorage under nyckeln 'min_anteckning'
  // BONUS: Visa statusText genom att ändra dess display till "block", och dölj den
  // igen efter 1 sekund med en setTimeout().
})
