# 🧪 Laboration 13 – Profilkortet & Klickräknaren i React JS

Välkommen till din första laboration i React! I den här uppgiften ska du bygga en klickräknare inuti din huvudkomponent (`App.jsx`) med hjälp av Reacts inbyggda reaktivitets-hook: `useState`.

## 🎯 Syfte & Mål

- Förstå hur en funktionell React-komponent returnerar gränssnitt med JSX.
- Lära sig att skapa och uppdatera ett reaktivt tillstånd (state) med `useState`.
- Förstå hur React binder händelser i JSX med hjälp av kamel-notering (`onClick`).
- Se hur React automatiskt ritar om skärmen (re-render) så fort en set-funktion anropas.

---

## 🏃‍♂️ Instruktioner för uppgiften

Öppna filen `App.jsx`. Din uppgift är att fylla i koden där det står `/* DIN KOD HÄR */` utifrån följande punkter:

1. **Skapa ett state:** Använd funktionen `useState()` högst upp i din komponent för att skapa ett reaktivt minne som heter `antal` och en tillhörande ändringsfunktion som heter `setAntal`. Låt räknaren starta på värdet `0`.
2. **Läs av värdet i JSX:** Inuti din retur-sats, skriv ut variabeln `antal` inuti texten med hjälp av Reacts måsvingar: `{antal}`.
3. **Koppla händelsen:** Lägg till en klick-lyssnare på knappen med hjälp av React-attributet `onClick`.
4. **Uppdatera värdet:** Skriv en pilfunktion (arrow function) direkt inuti din `onClick` som anropar `setAntal` och plussar på det nuvarande värdet med 1: `onClick={() => setAntal(antal + 1)}`.

---

## 🔑 Lösningsförslag / Facit

_Försök att lösa uppgiften själv först! Om du kör fast eller vill rätta din kod kan du jämföra med lösningsförslaget som finns i slutet av kompendiet._

```jsx
import { useState } from "react"

function App() {
  const anvandare = "Acke"

  // LÖSNING: Vi skapar variabeln och dess set-funktion med useState(0)
  const [antal, setAntal] = useState(0)

  return (
    <div className="profile-card" style={styles.card}>
      <h2>Kursansvarig: {anvandare}</h2>

      {/* LÖSNING: Vi skriver ut variabeln direkt med måsvingar */}
      <p>Du har gett den här läraren {antal} tummar upp! 👍</p>

      {/* LÖSNING: Vi sätter onClick och kör en pilfunktion som uppdaterar vårt state */}
      <button style={styles.button} onClick={() => setAntal(antal + 1)}>
        Ge en tumme upp!
      </button>
    </div>
  )
}

const styles = {
  card: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    border: "2px solid #e1e4e6",
    borderRadius: "8px",
    maxWidth: "300px",
    textAlign: "center",
    fontFamily: "sans-serif",
    margin: "20px auto",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  },
}

export default App
```
