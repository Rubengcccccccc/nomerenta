document.getElementById("calcular").addEventListener("click", function() {
  var hora = parseInt(document.getElementById("hora").value);
  var distancia = parseInt(document.getElementById("distancia").value);
  var personas = parseInt(document.getElementById("personas").value);
  var ivi = parseInt(document.getElementById("ivi").value);

  var puntos = hora + distancia + personas + ivi;

  if (puntos >= 4) {
    document.getElementById("resultado").textContent = "Te renta quedar (anca ruben)";
  } else {
    document.getElementById("resultado").textContent = "No te renta (broj)";
  }
});
