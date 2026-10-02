# Labb 11 Gästboken

## Syfte

Förstå grundläggande webbsäkerhet och stoppa XSS-attacker (Cross-Site Scripting).

## Beskrivning

Som frontend-utvecklare är du dörrvakten mot skadlig kod. I den här labben får du först agera hackare och testa att krascha en gästbok genom att injicera skadliga script via ett textfält. Därefter ska du bygga om applikationen och säkra den mot XSS-attacker genom att byta ut osäkra DOM-metoder mot trygga branschstandarder.

## Lösningsförslag

```javascript
"use strict"

const input = document.querySelector("#namn-input")
const knapp = document.querySelector("#btn-skicka")
const flode = document.querySelector("#gastbok-flode")

knapp.addEventListener("click", () => {
  const anvandarensText = input.value

  if (anvandarensText.trim() !== "") {
    // --- DET OSÄKRA SÄTTET (XSS-SÅRBART): ---
    // flode.innerHTML += `<div class="inlagg">${anvandarensText}</div>`;

    // --- DET SÄKRA SÄTTET: ---
    // 1. Skapa elementet manuellt i minnet
    const div = document.createElement("div")
    div.classList.add("inlagg")

    // 2. Sätt textinnehållet med textContent (rensar bort all kod automatiskt!)
    div.textContent = anvandarensText

    // 3. Tryck ut det färdiga elementet i flödet
    flode.appendChild(div)

    // Rensa inputfältet
    input.value = ""
  }
})
```
