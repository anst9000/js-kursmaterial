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

// 1. Skriv en funktion som renderar ut produkter på sidan med hjälp av .map()
function visaProdukter(lista) {
  // DIN KOD HÄR:
  // Använd lista.map() för att göra om objekten till <li>-strängar eller element.
  // Glöm inte att uppdatera ul.innerHTML!
}

// 2. Skriv en funktion som räknar ut det totala värdet av listan med .reduce()
function uppdateraTotal(lista) {
  // DIN KOD HÄR:
  // Använd lista.reduce() för att plussa ihop alla pris.
  // Sätt totalSpan.textContent till slutsumman.
}

// 3. Koppla händelselyssnare till knapparna
document.querySelector("#btn-all").addEventListener("click", () => {
  visaProdukter(produkter)
  uppdateraTotal(produkter)
})

document.querySelector("#btn-reaprodukter").addEventListener("click", () => {
  // DIN KOD HÄR:
  // Använd .filter() för att bara få produkter som kostar under 5000 kr.
  // Kör sedan visaProdukter och uppdateraTotal med den filtrerade listan!
})

// Startkörning
visaProdukter(produkter)
uppdateraTotal(produkter)
