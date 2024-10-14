"use strict"

const knapp = document.querySelector("button")
const kaninRubrik = document.querySelector("h2")
const kaninLista = document.querySelector("#kanin-lista")

knapp.addEventListener("click", hamtaKaniner)

function hamtaKaniner() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
}

function main() {
  kaninRubrik.style.display = "none"
  kaninLista.style.display = "none"

  console.log("allting funkar")
}

main()
