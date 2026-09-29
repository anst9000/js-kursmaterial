# Labb 07 RPG Arenan

## Syfte

Förstå principerna bakom Objektorienterad programmering (OOP) och dataskydd i JavaScript.

## Beskrivning

Välkommen till arenan! Här ska du bygga basen till ett textbaserat rollspel. Du kommer att skapa en hjälte och ett monster utifrån en gemensam JavaScript-class. Din utmaning är att kapsla in karaktärernas hälsa med privata egenskaper (#) så att spelreglerna inte går att fuska med utifrån.

## Lösningsförslag

```javascript
"use strict"

const logglåda = document.querySelector("#logglåda")
const attackKnapp = document.querySelector("#btn-attack")

function skrivUt(text) {
  logglåda.innerHTML += `<p>${text}</p>`
  logglåda.scrollTop = logglåda.scrollHeight
}

class Karaktär {
  #liv = 100 // Privat variabel

  constructor(namn, styrka) {
    this.namn = namn
    this.styrka = styrka
  }

  // Getter för att läsa nuvarande liv utifrån
  get nuvarandeLiv() {
    return this.#liv
  }

  // Getter för att se om karaktären lever
  get lever() {
    return this.#liv > 0
  }

  taSkada(mängd) {
    this.#liv -= mängd
    if (this.#liv < 0) this.#liv = 0 // Förhindra minusliv
    skrivUt(`${this.namn} tog ${mängd} skada! (Liv kvar: ${this.#liv})`)
  }
}

// Skapa instanser
const hjalte = new Karaktär("Link", 25)
const monster = new Karaktär("Ganon", 15)

attackKnapp.addEventListener("click", () => {
  if (hjalte.lever && monster.lever) {
    // Hjälten slår monstret
    monster.taSkada(hjalte.styrka)

    // Kontrollera om monstret dog av attacken
    if (!monster.lever) {
      skrivUt(`🎉 ${monster.namn} är besegrad! Du vann!`)
      attackKnapp.disabled = true
      attackKnapp.textContent = "Seger!"
    }
  }
})
```
