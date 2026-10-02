function App() {
  // Sätter ett vanligt strängvärde på variabeln 'anvandare'
  const anvandare = "Acke"

  // 1. DIN KOD HÄR: Skapa ett state som heter 'antal' och en set-funktion 'setAntal'
  // med hjälp av useState(). Låt startvärdet vara 0.
  // const [antal, setAntal] = /* DIN KOD HÄR */;

  return (
    <div className="profile-card" style={styles.card}>
      <h2>Kursansvarig: {anvandare}</h2>

      {/* 2. DIN KOD HÄR: Skrv ut värdet på din state-variabel 'antal' med måsvingar */}
      <p>Du har gett den här läraren {/* DIN KOD HÄR */} tummar upp! 👍</p>

      {/* 3 & 4. DIN KOD HÄR: Koppla klick-händelsen till knappen med onClick */}
      {/* Låt onClick köra setAntal och stega upp värdet med 1 */}
      <button style={styles.button}>Ge en tumme upp!</button>
    </div>
  )
}

// Enkel inlinestyling så att studenterna slipper konfigurera App.css i den här korta labben
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
    backgroundColor: "#007bff", // Reacts/Vites standardblåa färg
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  },
}

export default App
