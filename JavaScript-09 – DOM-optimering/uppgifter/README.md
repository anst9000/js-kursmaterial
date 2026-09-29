# Labb 09 Kundvagnen

## Syfte

Skriva prestandavänlig frontend-kod med designmönstret Event Delegation.

## Beskrivning

Att sätta hundratals händelselyssnare på en webbsida gör den långsam och minneskrävande. I den här laborationen ska du optimera en kundvagn. Du kommer att lära dig hur händelser "bubblar" uppåt i HTML-trädet, och hur du kan styra och ta bort dussintals produkter med en enda, gemensam händelselyssnare på föräldraelementet.

## Lösningsförslag

```javascript
"use strict"

const vagnLista = document.querySelector("#kundvagn-lista")

// Vi sätter EN händelselyssnare på hela UL-listan (föräldern)
vagnLista.addEventListener("click", (event) => {
  // Kontrollera om det specifika elementet vi klickade på är en knapp med klassen 'delete-btn'
  if (event.target.classList.contains("delete-btn")) {
    // Hitta knappen förälder (vilket är <li>-elementet)
    const liElement = event.target.parentElement

    // Ta bort li-elementet från DOM-trädet
    liElement.remove()

    console.log("Artikel borttagen via Event Delegation!")
  }
})
```
