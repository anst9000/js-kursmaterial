"use strict"

const knapp = document.querySelector("button")
const kaninRubrik = document.querySelector("h2")
const kaninLista = document.querySelector("#kanin-lista")

function skapaKaniner(kaninData) {
  console.log("--> kaninData", kaninData)
  kaninRubrik.style.display = "block"
  kaninLista.style.display = "grid"

  kaninData.forEach((kanin) => {
    // const li = document.createElement("li")
    // li.setAttribute("class", "card")
    // const h3 = document.createElement("h3")
    // h3.setAttribute("class", "card-namn")
    // h3.innerText = kanin.name
    // const div = document.createElement("div")
    // div.setAttribute("class", "card-beskrivning")
    // const p = document.createElement("p")
    // p.innerText = kanin.company.catchPhrase
    // div.appendChild(p)
    // li.appendChild(h3)
    // li.appendChild(div)
    // kaninLista.appendChild(li)
    // kaninLista.innerHTML += `<li class="card">
    //     <h3 class="card-namn">${kanin.name}</h3>
    //     <div class="card-beskrivning">
    //       <p>${kanin.company.catchPhrase}</p>
    //     </div>
    //   </li>`
  })
}

function hamtaKaniner() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      skapaKaniner(data)
    })
}

function main() {
  // kaninRubrik.style.display = "none"
  // kaninLista.style.display = "none"

  console.log("allting funkar")
}

main()

knapp.addEventListener("click", hamtaKaniner)
