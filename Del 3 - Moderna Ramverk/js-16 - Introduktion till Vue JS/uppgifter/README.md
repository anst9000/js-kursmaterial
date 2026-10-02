# 🧪 Laboration 15 – Profilkortet & Klickräknaren i Vue JS

Välkommen till din första laboration i Vue JS! I den här uppgiften ska du bygga en Single File Component (`.vue`) med hjälp av Vues moderna **Composition API** och funktion för reaktivitet: `ref()`.

## 🎯 Syfte & Mål

- Förstå hur en `.vue`-fil är uppdelad i tre block: `script`, `template` och `style`.
- Lära sig att skapa och uppdatera ett reaktivt tillstånd (state) med hjälp av `ref()`.
- Förstå den viktiga regeln kring att använda `.value` inuti JavaScript-koden men inte i HTML-mallen.
- Använda Vues genväg för händelselyssnare med `@click`.

---

## 🏃‍♂️ Instruktioner för uppgiften

Öppna filen `Raknare.vue`. Din uppgift är att fylla i koden där det står `<!-- DIN KOD HÄR -->` eller `// DIN KOD HÄR` utifrån följande punkter:

1. **Skapa ett reaktivt minne:** Använd funktionen `ref()` för att skapa en variabel som heter `antal`. Den ska starta på värdet `0`.
2. **Läs av värdet i HTML:** I din `<template>`, skriv ut variabeln `antal` inuti texten med hjälp av Vues dubbla måsvingar: `{{ antal }}`. (Kom ihåg: ingen `.value` inuti HTML-mallen!).
3. **Koppla händelsen:** Lägg till en klick-lyssnare på knappen med hjälp av Vues `@click`-directive.
4. **Uppdatera värdet:** Skriv klart funktionen `plussaPa()`. Kom ihåg att eftersom `antal` är skapat med `ref()`, måste du använda `.value` för att öka värdet inuti JavaScript-koden: `antal.value++`.

---

## 🔑 Lösningsförslag / Facit

_Försök att lösa uppgiften själv först! Om du kör fast eller vill rätta din kod kan du jämföra med lösningsförslaget som finns i slutet av kompendiet._

```vue
<script setup>
  import { ref } from "vue"

  const anvandare = "Acke"

  // LÖSNING: Vi skapar en reaktiv referens med ref(0)
  const antal = ref(0)

  function plussaPa() {
    // LÖSNING: Vi MÅSTE använda .value inuti script-blocket
    antal.value++
  }
</script>

<template>
  <div class="profile-card">
    <h2>Kursansvarig: {{ anvandare }}</h2>

    <!-- LÖSNING: Vi skriver ut variabeln direkt (utan .value) inuti dubbla måsvingar -->
    <p>Du har gett den här läraren {{ antal }} tummar upp! 👍</p>

    <!-- LÖSNING: Vi binder klick-eventet med @click="funktion" -->
    <button @click="plussaPa">Ge en tumme upp!</button>
  </div>
</template>

<style scoped>
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
    background: #42b883;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    background: #33a06f;
  }
</style>
```
