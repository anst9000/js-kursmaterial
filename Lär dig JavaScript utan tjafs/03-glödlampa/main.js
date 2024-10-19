const rubrik = document.getElementById("rubrik")
const glodlampa = document.getElementById("glodlampa")
const paKnapp = document.getElementById("paKnapp")
const avKnapp = document.getElementById("avKnapp")

paKnapp.addEventListener("click", function () {
  glodlampa.src = "glodlampaPa.gif"
  document.body.style.backgroundColor = "#eeeeee"
  rubrik.innerHTML = "Nu ser jag igen."
})

avKnapp.addEventListener("click", function () {
  glodlampa.src = "glodlampaAv.gif"
  document.body.style.backgroundColor = "#777777"
  rubrik.innerHTML = "Vad mörkt det är."
})
