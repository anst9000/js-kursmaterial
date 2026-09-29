# Labb 10 Anteckningsblocket

## Syfte

Använda webbläsarens inbyggda Web-API:er för att lagra data lokalt.

## Beskrivning

Trött på att all data försvinner så fort du trycker på F5? I den här uppgiften ska du bygga ett digitalt anteckningsblock. Du kommer att använda LocalStorage för att spara användarens text rad för rad i webbläsarens dolda minne, så att anteckningarna ligger säkert kvar nästa gång sidan öppnas.

## Lösningsförslag

```javascript
"use strict"

const textfalt = document.querySelector("#textfält")
const statusText = document.querySelector("#status")

// 1. Ladda sparad text när sidan startas (om det finns något sparat)
const sparadText = localStorage.getItem("min_anteckning")
if (sparadText) {
  textfalt.value = sparadText
}

// 2. Lyssna på när användaren skriver i textfältet
textfalt.addEventListener("input", () => {
  // Spara det nuvarande värdet till LocalStorage
  localStorage.setItem("min_anteckning", textfalt.value)

  // Visa en liten "Sparat!"-text tillfälligt
  statusText.style.display = "block"

  // Dölj statusmeddelandet efter 1 sekunds tystnad
  setTimeout(() => {
    statusText.style.display = "none"
  }, 1000)
})
```
