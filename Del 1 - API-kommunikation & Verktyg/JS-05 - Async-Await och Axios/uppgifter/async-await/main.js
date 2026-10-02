"use strict"

// DOM-element
const btnSekventiell = document.querySelector("#btn-sekventiell")
const btnParallell = document.querySelector("#btn-parallell")
const statusFlode = document.querySelector("#status-flode")
const tidsResultat = document.querySelector("#tids-resultat")

// --- MOCK API-FUNKTIONER (Simulerar köket) ---
function tillagaBurgare() {
  return new Promise((resolve) => setTimeout(() => resolve("Burgare 🍔"), 2000))
}

function tillagaPommes() {
  return new Promise((resolve) => setTimeout(() => resolve("Pommes 🍟"), 1500))
}

function hällUppDricka() {
  return new Promise((resolve) => setTimeout(() => resolve("Läsk 🥤"), 500))
}

// --- 1. DET SEKVENTIELLA SÄTTET (Långsamt: En efter en) ---
async function beställSekventiellt() {
  statusFlode.textContent = "Startar sekventiell beställning...\n"
  tidsResultat.textContent = ""
  const startTid = performance.now()

  try {
    // Roboten väntar på burgaren, SEN pommes, SEN dricka
    const burgare = await tillagaBurgare()
    statusFlode.textContent += `Klar: ${burgare}\n`

    const pommes = await tillagaPommes()
    statusFlode.textContent += `Klar: ${pommes}\n`

    const dricka = await hällUppDricka()
    statusFlode.textContent += `Klar: ${dricka}\n`

    const slutTid = performance.now()
    const totalTid = ((slutTid - startTid) / 1000).toFixed(2)
    tidsResultat.textContent = `Total tid: ${totalTid} sekunder (2.0 + 1.5 + 0.5)`
  } catch (fel) {
    statusFlode.innerHTML += `<span class="error-text">Fel i köket: ${fel}</span>`
  }
}

// --- 2. DET PARALLELLA SÄTTET (Snabbt: Alla samtidigt) ---
async function beställParallellt() {
  statusFlode.textContent =
    "Startar parallell beställning (allt tillagas samtidigt)...\n"
  tidsResultat.textContent = ""
  const startTid = performance.now()

  try {
    // Vi startar alla tre Promises SAMTIDIGT utan att använda await direkt
    const burgarePromise = tillagaBurgare()
    const pommesPromise = tillagaPommes()
    const drickaPromise = hällUppDricka()

    // Vi väntar på att ALLA ska bli klara samtidigt med Promise.all()
    // Resultatet packas upp i en array i exakt samma ordning
    const [burgare, pommes, dricka] = await Promise.all([
      burgarePromise,
      pommesPromise,
      drickaPromise,
    ])

    statusFlode.textContent += `Klar: ${burgare}\nKlar: ${pommes}\nKlar: ${dricka}\n`

    const slutTid = performance.now()
    const totalTid = ((slutTid - startTid) / 1000).toFixed(2)

    // Eftersom de kördes samtidigt blir totaltiden bara så lång tid som det absolut segaste steget tog (burgaren = 2 sek)
    tidsResultat.textContent = `Total tid: ${totalTid} sekunder! (Allt kördes parallellt)`
  } catch (fel) {
    statusFlode.innerHTML += `<span class="error-text">Fel i köket: ${fel}</span>`
  }
}

function main() {
  // Event Listeners
  btnSekventiell.addEventListener("click", beställSekventiellt)
  btnParallell.addEventListener("click", beställParallellt)
}

main()
