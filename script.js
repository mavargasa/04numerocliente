function verificarNumeroCliente() {
  var numeroCliente = document.getElementById("numeroCliente").value;
  var resultado = document.getElementById("resultado");

  if (numeroCliente == 1000) {
    resultado.textContent = "Ganaste un premio";
  } else {
    resultado.textContent = "Lo sentimos, sigue participando";
  }
}
