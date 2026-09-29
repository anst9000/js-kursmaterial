# Labb 08 Räknar-Fabriken

## Syfte

Bemästra funktionell programmering under huven med hjälp av Closures.

## Beskrivning

Hur kan en funktion komma ihåg ett värde utan att använda en global variabel eller en klass? Svaret är Closures. I den här labben ska du programmera en klickräknare genom att bygga en funktion inuti en annan funktion, och se hur JavaScript skapar ett doldt "minnesutrymme" för din kod.

## Lösningsförslag

```javascript
"use strict"

function skapaRäknare() {
  let antal = 0 // Detta blir instängt i funktionens Closure-ryggsäck

  return function () {
    antal++ // Den inre funktionen har tillgång till variabeln
    return antal
  }
}

const minRäknare = skapaRäknare()

const siffra = document.querySelector("#siffra")
const knapp = document.querySelector("#btn-klick")

knapp.addEventListener("click", () => {
  const nyttNummer = minRäknare()
  siffra.textContent = nyttNummer
})
```
