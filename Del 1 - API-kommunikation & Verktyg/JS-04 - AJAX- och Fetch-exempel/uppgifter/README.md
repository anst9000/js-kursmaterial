# Labb 04 Kaninlista

## Syfte

Förstå grundläggande syntax för att använda AJAX- och Fetch-anrop.

## Beskrivning

Det finns sammanlagt fyra filer med kod som du behöver känna till för den här labben.

- index.html
- style.css
- ajax.js
- fetch.js

I index.html behöver du kommentera bort en rad och kommentera fram en annan,
nämligen vilken JavaScript-fil du vill använda.

```html
<script src="ajax.js" defer></script>
<!-- <script src="fetch.js" defer></script> -->
```

När du kör den här labben med AJAX-anrop så låter du koden stå som den är nu.
När det är dags för Fetch-anrop kommenterar du bort den övre raden och
kommenterar fram den undre raden.

```html
<!-- HTML-KOMMENTAR -->
```

I JavaScript-filerna finns det redan några console.log() inlagt på några
ställen för att ge lite tips och tricks. Kör du fast så prova att ta fram
häftena och läs dig till hur man borde göra. Det går också att använda
google för att söka på exempel på AJAX- och Fetch-anrop.

## Lösningsförslag

### AJAX-anrop

```javascript
"use strict"

const knapp = document.querySelector("button")
const kaninRubrik = document.querySelector("h2")
const kaninLista = document.querySelector("#kanin-lista")

function skapaKaniner(kaninData) {
  // console.log("--> kaninData", kaninData)
  kaninRubrik.style.display = "block"
  kaninLista.style.display = "grid"

  kaninData.forEach((kanin) => {
    const li = document.createElement("li")
    li.setAttribute("class", "card")
    const h3 = document.createElement("h3")
    h3.setAttribute("class", "card-namn")
    h3.innerText = kanin.name
    const div = document.createElement("div")
    div.setAttribute("class", "card-beskrivning")
    const p = document.createElement("p")
    p.innerText = kanin.company.catchPhrase
    div.appendChild(p)
    li.appendChild(h3)
    li.appendChild(div)
    kaninLista.appendChild(li)
    kaninLista.innerHTML += `<li class="card">
        <h3 class="card-namn">${kanin.name}</h3>
        <div class="card-beskrivning">
          <p>${kanin.company.catchPhrase}</p>
        </div>
      </li>`
  })
}

// https://jsonplaceholder.typicode.com/users
function hamtaKaniner() {
  // console.log("clicketi clopp")
  let xhr = new XMLHttpRequest()
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // console.log(xhr.responseText)
      const dataArray = JSON.parse(xhr.responseText)
      skapaKaniner(dataArray)
    }
  }

  xhr.send()
}

function main() {
  kaninRubrik.style.display = "none"
  kaninRubrik.style.display = "none"
  // console.log("allting funkar")
}

main()

knapp.addEventListener("click", hamtaKaniner)
```

### Fetch-anrop

```javascript
"use strict"

const knapp = document.querySelector("button")
const kaninRubrik = document.querySelector("h2")
const kaninLista = document.querySelector("#kanin-lista")

function skapaKaniner(kaninData) {
  // console.log("--> kaninData", kaninData)
  kaninRubrik.style.display = "block"
  kaninLista.style.display = "grid"

  kaninData.forEach((kanin) => {
    const li = document.createElement("li")
    li.setAttribute("class", "card")
    const h3 = document.createElement("h3")
    h3.setAttribute("class", "card-namn")
    h3.innerText = kanin.name
    const div = document.createElement("div")
    div.setAttribute("class", "card-beskrivning")
    const p = document.createElement("p")
    p.innerText = kanin.company.catchPhrase
    div.appendChild(p)
    li.appendChild(h3)
    li.appendChild(div)
    kaninLista.appendChild(li)
    kaninLista.innerHTML += `<li class="card">
        <h3 class="card-namn">${kanin.name}</h3>
        <div class="card-beskrivning">
          <p>${kanin.company.catchPhrase}</p>
        </div>
      </li>`
  })
}

// https://jsonplaceholder.typicode.com/users
function hamtaKaniner() {
  // console.log("clicketi clopp")

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      skapaKaniner(data)
    })
}

function main() {
  kaninRubrik.style.display = "none"
  kaninRubrik.style.display = "none"
  // console.log("allting funkar")
}

main()

knapp.addEventListener("click", hamtaKaniner)
```
