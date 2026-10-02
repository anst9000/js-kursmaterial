/**
import { Component } from "@angular/core"

@Component({
  selector: "app-raknare",
  standalone: true,
  template: `
    <div class="profile-card">
      <h2>Kursansvarig: {{ anvandare }}</h2>

      <!-- 3. DIN KOD HÄR: Skriv ut värdet på din signal 'antal'. -->
      <!-- Kom ihåg parenteserna () eftersom det är en signal! -->
      <p>Du har gett den här läraren {{}} tummar upp! 👍</p>

      <!-- 4. DIN KOD HÄR: Koppla klick-händelsen till metoden plussaPa() -->
      <!-- Angular använder runda parenteser runt eventet, t.ex. (event) -->
      <button>Ge en tumme upp!</button>
    </div>
  `,
  styles: `
    .profile-card {
      padding: 20px;
      background: #f8f9fa;
      border: 2px solid #e1e4e6;
      border-radius: 8px;
      max-width: 300px;
      text-align: center;
      font-family: sans-serif;
    }
    button {
      background: #dd0031;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
    }
    button:hover {
      background: #b30026;
    }
  `,
})
export class RaknareComponent {
  // 1. DIN KOD HÄR: Sätt datatypen 'string' på variabeln och ge den värdet 'Acke'
  anvandare = "Acke"

  // 2. DIN KOD HÄR: Skapa en signal som heter 'antal' med startvärdet 0.
  // Deklarera att signalen ska innehålla ett 'number'.
  antal = null

  plussaPa(): void {
    // 4. DIN KOD HÄR: Uppdatera signalen 'antal' med hjälp av metoden .update()
    // så att värdet ökar med 1 vid varje klick.
  }
}
 */
