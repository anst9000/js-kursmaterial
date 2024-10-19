"use strict"

// Variabler
const knapp = document.querySelector("button")
const rubrik = document.querySelector("h1")
const bild = document.querySelector("img")

// Funktioner
function andraDjur() {
  const allaFargerLangd = 4
  const slumptal = Math.floor(Math.random() * allaFargerLangd)
  const allaDjur = [
    {
      djur: "Iller",
      src: "iller.jpg",
      bredd: "600",
      hojd: "450",
      alt: "iller",
    },
    {
      djur: "Hund",
      src: "hund.png",
      bredd: "620",
      hojd: "420",
      alt: "hund",
    },
    {
      djur: "Kanin",
      src: "kanin.jpg",
      bredd: "600",
      hojd: "450",
      alt: "kanin",
    },
    {
      djur: "Katt",
      src: "katt.webp",
      bredd: "600",
      hojd: "450",
      alt: "katt",
    },
  ]

  const nyttDjur = allaDjur[slumptal]

  bild.src = nyttDjur.src
  bild.width = nyttDjur.bredd
  bild.height = nyttDjur.hojd
  bild.alt = nyttDjur.alt

  rubrik.innerHTML = nyttDjur.djur
}

// Eventlisteners
knapp.addEventListener("click", andraDjur)
