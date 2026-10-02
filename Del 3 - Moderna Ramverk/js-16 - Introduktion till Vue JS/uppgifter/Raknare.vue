<script setup>
  import { ref } from "vue"

  // 1. DIN KOD HÄR: Sätt ett vanligt strängvärde på variabeln 'anvandare' (t.ex. 'Acke')
  const anvandare = "Acke"

  // 2. DIN KOD HÄR: Skapa en reaktiv variabel som heter 'antal' med hjälp av ref().
  // Den ska starta på värdet 0.
  const antal = null

  function plussaPa() {
    // 4. DIN KOD HÄR: Öka värdet på din reaktiva variabel 'antal' med 1.
    // TÄNK PÅ: Vilket nyckelord måste du lägga till efter variabelnamnet inuti <script>?
  }
</script>

<template>
  <div class="profile-card">
    <h2>Kursansvarig: {{ anvandare }}</h2>

    <!-- 2. DIN KOD HÄR: Skriv ut värdet på din reaktiva variabel 'antal' med dubbla måsvingar -->
    <p>Du har gett den här läraren {{}} tummar upp! 👍</p>

    <!-- 3. DIN KOD HÄR: Koppla klick-händelsen på knappen till funktionen plussaPa med @click -->
    <button>Ge en tumme upp!</button>
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
    background: #42b883; /* Vues karaktäristiska gröna färg */
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
