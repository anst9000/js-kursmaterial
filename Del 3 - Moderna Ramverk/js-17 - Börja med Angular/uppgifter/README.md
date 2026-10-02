# 🧪 Laboration 16 – Profilkortet & Klickräknaren i Angular

Välkommen till din allra första laboration i Angular! I den här uppgiften ska du prova på att skriva en modern, fristående komponent (_Standalone Component_) med hjälp av TypeScript och Angulars nya reaktivitetssystem: **Signals**.

## 🎯 Syfte & Mål

- Förstå hur en Angular-komponent är uppbyggd med en `@Component`-decorator.
- Lära sig läsa och uppdatera ett reaktivt tillstånd med hjälp av `signal()`.
- Förstå hur Angular binder händelser direkt i HTML-mallen med runda parenteser `(click)`.

---

## 🏃‍♂️ Instruktioner för uppgiften

Öppna filen `raknare.component.ts`. Din uppgift är att fylla i koden där det står `// DIN KOD HÄR` utifrån följande punkter:

1. **Definiera datatyper:** Se till att variabeln `anvandare` är låst till en sträng (`string`).
2. **Skapa en Signal:** Skapa en reaktiv signal som heter `antal`. Den ska hålla ett heltal (`number`) och starta på värdet `0`.
3. **Läs av Signalen:** I HTML-mallen (`template`), skriv ut signalen `antal`. Kom ihåg att en signal måste anropas som en funktion med parenteser: `{{ antal() }}`.
4. **Uppdatera Signalen:** Skriv klart metoden `plussaPa()`. Använd metoden `.update()` på din signal för att öka det nuvarande värdet med 1 varje gång användaren klickar på knappen.

---

## 🔑 Lösningsförslag / Facit

_Försök att lösa uppgiften själv först! Om du kör fast eller vill rätta din kod kan du jämföra med lösningsförslaget som finns i din lärares rättningsmaterial eller i slutet av kompendiet._

```typescript
import { Component, signal } from "@angular/core"

@Component({
  selector: "app-raknare",
  standalone: true,
  template: `
    <div class="profile-card">
      <h2>Kursansvarig: {{ anvandare }}</h2>

      <!-- LÖSNING: Vi anropar signalen som en funktion antal() -->
      <p>Du har gett den här läraren ${antal()} tummar upp! 👍</p>

      <!-- LÖSNING: Vi binder klicket med (click)="metod()" -->
      <button (click)="plussaPa()">Ge en tumme upp!</button>
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
  // LÖSNING: Strikt typning med string
  anvandare: string = "Acke"

  // LÖSNING: En signal som håller datatypen number och startar på 0
  antal = signal<number>(0)

  plussaPa(): void {
    // LÖSNING: Vi använder .update() för att stega upp värdet reaktivt
    this.antal.update((nuvarandeVärde) => nuvarandeVärde + 1)
  }
}
```
