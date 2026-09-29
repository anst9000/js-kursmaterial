# Slutprojekt - Admin Dashboard för Elektronikshoppen

## Mål

Bygga en fullt fungerande admin-panel i React för att hantera produkter, söka i lagret, analysera försäljningsstatistik och lägga till nya artiklar.

## Funktioner som ska implementeras

- Statistik-kort (Analytics)
  Räkna ut det totala lagervärdet och snittpriset för alla produkter med hjälp av .reduce().
- Live-sökning
  Filtrera produkterna i realtid när användaren skriver i ett sökfält (.filter()).
- Hämta extern data
  Ladda in en startlista med produkter från ett externt API med fetch och useEffect.
- Lägga till produkter
  Ett formulär där admin kan lägga till nya produkter.
- Permanent lagring
  Appen ska spara listan i LocalStorage så att tillagda produkter finns kvar när sidan laddas om.

## Komma igång

1. Börja med att skapa ett nytt React-projekt med Vite.
   `npm create vite@latest dashboard-app -- --template react`

2. Rensa mappen src/, det vill säga ta bort alla filer därifrån, men spara mappen.

3. Skapa följande filer i mappen
   `src/index.css`
   `src/App.jsx`

4. Kopiera över innehållet från de filer som ligger i den här mappen med samma namn.

## Lösningsförslag

src/App.jsx

````jsx
import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [produkter, setProdukter] = useState([]);
  const [sökord, setSökord] = useState('');
  const [nyttNamn, setNyttNamn] = useState('');
  const [nyttPris, setNyttPris] = useState('');
  const [nyKategori, setNyKategori] = useState('Elektronik');

  // 1. Hämta startdata (Först LocalStorage, annars API-fetch)
  useEffect(() => {
    const sparadData = localStorage.getItem('dashboard_produkter');

    if (sparadData) {
      setProdukter(JSON.parse(sparadData));
    } else {
      fetch('https://fakestoreapi.com')
        .then(res => res.json())
        .then(data => {
          // Vi städar upp API-datan så den passar våra svenska fält
          const formateradData = data.map(item => ({
            id: item.id,
            namn: item.title,
            pris: Math.round(item.price * 10), // Gör om dollar till kr-ish
            kategori: 'Elektronik'
          }));
          setProdukter(formateradData);
        })
        .catch(err => console.error("Kunde inte hämta API-data:", err));
    }
  }, []);

  // 2. Spara till LocalStorage automatiskt när listan uppdateras
  useEffect(() => {
    if (produkter.length > 0) {
      localStorage.setItem('dashboard_produkter', JSON.stringify(produkter));
    }
  }, [produkter]);

  // 3. Hantera formulär: Lägg till ny produkt
  const läggTillProdukt = (e) => {
    e.preventDefault();

    // Säkerhetskontroll / Validering
    if (!nyttNamn.trim() || !nyttPris || nyttPris <= 0) {
      alert("Vänligen fyll i giltigt namn och pris!");
      return;
    }

    const nyProdukt = {
      id: Date.now(), // Skapar ett unikt ID baserat på tidstämpeln
      namn: nyttNamn,
      pris: parseFloat(nyttPris),
      kategori: nyKategori
    };

    setProdukter([nyProdukt, ...produkter]); // Lägger till den nya överst i statet

    // Rensa formuläret
    setNyttNamn('');
    setNyttPris('');
  };

  // 4. Beräkna statistik med .reduce()
  const totaltVärde = produkter.reduce((summa, produkt) => summa + produkt.pris, 0);
  const snittPris = produkter.length > 0 ? totaltVärde / produkter.length : 0;

  // 5. Filtrera produkter live utifrån sökfältet med .filter()
  const filtreradeProdukter = produkter.filter(produkt =>
    produkt.namn.toLowerCase().includes(sökord.toLowerCase())
  );

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
            <p>{totaltVärde.toLocaleString('sv-SE')} kr</p>
          </div>
          <div className="stat-box">
            <h3>Snittpris / Artikel</h3>
            <p>{snittPris.toFixed(0)} kr</p>
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
            {/* 6. Mappa ut de filtrerade produkterna */}
            {filtreradeProdukter.map(produkt => (
              <li key={produkt.id}>
                <span>
                  <b>{produkt.namn}</b> <span className="badge">{produkt.kategori}</span>
                </span>
                <span>{produkt.pris.toLocaleString('sv-SE')} kr</span>
              </li>
            ))}
            {filtreradeProdukter.length === 0 && <p>Inga produkter matchar din sökning.</p>}
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
              placeholder="T.ex. Sony WH-1000XM4"
              value={nyttNamn}
              onChange={(e) => setNyttNamn(e.target.value)}
            />

            <label>Pris (SEK)</label>
            <input
              type="number"
              placeholder="Pris i kronor"
              value={nyttPris}
              onChange={(e) => setNyttPris(e.target.value)}
            />

            <label>Kategori</label>
            <select value={nyKategori} onChange={(e) => setNyKategori(e.target.value)}>
              <option value="Elektronik">Elektronik</option>
              <option value="Ljud & Musik">Ljud & Musik</option>
              <option value="Hem automation">Hem automation</option>
            </select>

            <button type="submit">Lägg till i databasen</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;```
````
