# Labb 06: Produktfiltret

## Syfte

Lära sig skriva ren, modern och effektiv JavaScript-kod för att hantera datamängder.

## Beskrivning

I den här laborationen kommer du att bygga ett sök- och filtreringssystem för en fiktiv e-handel. Du ska sluta använda gamla for-loopar och istället bemästra de inbyggda array-metoderna .map(), .filter() och .reduce() för att hämta, sortera och summera produkter på skärmen.

## Lösningsförslag

```javascript
"use strict"

const produkter = [
  { id: 1, namn: "Smartphone", pris: 8999, kategori: "Elektronik" },
  { id: 2, namn: "Hörlurar", pris: 1499, kategori: "Ljud" },
  { id: 3, namn: "Kaffekokare", pris: 799, kategori: "Hem" },
  { id: 4, namn: "Smartwatch", pris: 3499, kategori: "Elektronik" },
  { id: 5, namn: "Laptop", pris: 14999, kategori: "Elektronik" },
]

const ul = document.querySelector("#produkt-lista")
const totalSpan = document.querySelector("#total-varde")

function visaProdukter(lista) {
  // Gör om arrayen till en sträng av HTML-li-element
  const htmlStrang = lista
    .map((produkt) => {
      return `<li><span>${produkt.namn}</span> <b>${produkt.pris} kr</b></li>`
    })
    .join("") // Slår ihop arrayen till en ren sträng

  ul.innerHTML = htmlStrang
}

function uppdateraTotal(lista) {
  const totalsumma = lista.reduce((totalt, produkt) => {
    return totalt + produkt.pris
  }, 0)

  totalSpan.textContent = totalsumma
}

document.querySelector("#btn-all").addEventListener("click", () => {
  visaProdukter(produkter)
  uppdateraTotal(produkter)
})

document.querySelector("#btn-reaprodukter").addEventListener("click", () => {
  // Filtrera ut de som kostar under 5000 kr
  const reaLista = produkter.filter((produkt) => produkt.pris < 5000)
  visaProdukter(reaLista)
  uppdateraTotal(reaLista)
})

// Startkörning när sidan laddas
visaProdukter(produkter)
uppdateraTotal(produkter)
```
