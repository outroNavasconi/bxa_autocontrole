const cabeca = document.getElementById("cabeca")
const fundoCabeca = document.getElementById("fundoCabeca")
const issoEhBom = document.getElementById("issoEhBom")
const issoNemTanto = document.getElementById("issoNemTanto")

cabeca.addEventListener("click", mudarEstadoMental) 

function mudarEstadoMental() {
  ativarAnimacoes()
  perdendoACabeca()
  precisandoConversar()
}

function ativarAnimacoes() {
  const animacoes = document.querySelector("[data-estado-animacoes]")
  if (animacoes.dataset.estadoAnimacoes === "false")
    animacoes.dataset.estadoAnimacoes = "true"
}

function perdendoACabeca() {
  fundoCabeca.classList.toggle("perdeuControle")
  if (fundoCabeca.classList.contains("perdeuControle"))
    cabeca.style.right = "56px"
  else 
    cabeca.style.right = "2px"
}

function precisandoConversar() {
  issoEhBom.classList.toggle("seuEstadoEhEsse")
  issoNemTanto.classList.toggle("seuEstadoEhEsse")
}

