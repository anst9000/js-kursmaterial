// =========================================================================
// LABB 11: GÄSTBOKEN (Säkerhet & XSS-skydd)
// Instruktion: Ta emot text från användaren. Skapa ett nytt div-element
// för hand och säkra texten med textContent istället för innerHTML.
// =========================================================================

const input = document.querySelector("#namn-input")
const knapp = document.querySelector("#btn-skicka")
const flode = document.querySelector("#gastbok-flode")

knapp.addEventListener("click", () => {
  const anvandarensText = input.value

  if (anvandarensText.trim() !== "") {
    // DIN KOD HÄR:
    // 1. Skapa ett nytt div-element med document.createElement('div')
    // 2. Lägg till klassen 'inlagg' på det nya elementet via .classList.add()
    // 3. SÄKERHET: Sätt textinnehållet med .textContent (använd INTE .innerHTML!)
    // 4. Tryck ut elementet i flödet med flode.appendChild()

    // Rensa inputfältet efteråt
    input.value = ""
  }
})
