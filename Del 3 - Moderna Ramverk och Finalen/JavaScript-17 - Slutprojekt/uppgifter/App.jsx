import { useEffect, useState } from "react"
import "./index.css"

function App() {
  const [produkter, setProdukter] = useState([])
  const [sökord, setSökord] = useState("")
  const [nyttNamn, setNyttNamn] = useState("")
  const [nyttPris, setNyttPris] = useState("")
  const [nyKategori, setNyKategori] = useState("Elektronik")

  // 1. UPPGIFT: Hämta data från API eller LocalStorage vid start
  useEffect(() => {
    // KOD HÄR:
    // Kontrollera om det finns produkter i LocalStorage under nyckeln 'dashboard_produkter'.
    // Om JA: Sätt state till den datan (JSON.parse).
    // Om NEJ: Gör en fetch till 'https://fakestoreapi.com'
    // och spara resultatet i ert state.
  }, [])

  // 2. UPPGIFT: Spara till LocalStorage varje gång produkt-statet ändras
  useEffect(() => {
    // KOD HÄR: Spara 'produkter' i LocalStorage (JSON.stringify)
  }, [produkter])

  // 3. UPPGIFT: Hantera när formuläret skickas (Lägg till produkt)
  const läggTillProdukt = (e) => {
    e.preventDefault()
    if (!nyttNamn || !nyttPris) return

    // KOD HÄR: Skapa ett nytt produktobjekt med unikt id, namn, pris (nummer!) och kategori.
    // Uppdatera produkt-statet. Rensa sedan input-fälten.
  }

  // 4. UPPGIFT: Beräkna statistik med .reduce()
  const totaltVärde = 0 // KOD HÄR: Använd produkter.reduce()
  const snittPris = 0 // KOD HÄR: Räkna ut snittet baserat på totaltVärde och antal produkter

  // 5. UPPGIFT: Filtrera produkter baserat på sökordet med .filter()
  const filtreradeProdukter = produkter // KOD HÄR: Använd produkter.filter()

  return (
    <div className="dashboard">
      <div className="header-wide">
        <h1>Elektronikshoppen – Admin Panel</h1>
      </div>

      {/* VÄNSTER SKÄRM: Analytics & Produktlista */}
      <div className="main-content">
        <div className="stats-grid">
          <div className="stat-box">
            <h3>Totalt Lagervärde</h3>
            <p>{totaltVärde.toFixed(2)} kr</p>
          </div>
          <div className="stat-box">
            <h3>Snittpris / Artikel</h3>
            <p>{snittPris.toFixed(2)} kr</p>
          </div>
        </div>

        <div className="card">
          <h2>Lagersökning ({filtreradeProdukter.length} st funna)</h2>
          <input
            type="text"
            placeholder="Sök på produktnamn..."
            value={sökord}
            onChange={(e) => setSökord(e.target.value)}
          />

          <ul>
            {/* 6. UPPGIFT: Mappa ut filtreradeProdukter till <li>-element med .map() */}
            {/* KOD HÄR */}
          </ul>
        </div>
      </div>

      {/* HÖGER SKÄRM: Nytt Produktformulär */}
      <div className="sidebar">
        <div className="card">
          <h2>Registrera Ny Vara</h2>
          <form onSubmit={läggTillProdukt}>
            <label>Produktnamn</label>
            <input
              type="text"
              value={nyttNamn}
              onChange={(e) => setNyttNamn(e.target.value)}
            />

            <label>Pris (SEK)</label>
            <input
              type="number"
              value={nyttPris}
              onChange={(e) => setNyttPris(e.target.value)}
            />

            <label>Kategori</label>
            <select
              value={nyKategori}
              onChange={(e) => setNyKategori(e.target.value)}
            >
              <option value="Elektronik">Elektronik</option>
              <option value="Ljud & Musik">Ljud & Musik</option>
              <option value="Hem automation">Hem automation</option>
            </select>

            <button type="submit">Lägg till i databasen</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
