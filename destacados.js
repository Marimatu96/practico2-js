const tarjetas = document.querySelectorAll(".tarjeta");
const contador = document.getElementById("contador");

function actualizarContador() {
    const seleccionadas = document.querySelectorAll(".tarjeta.seleccionada").length;
    contador.textContent = "Seleccionadas: " + seleccionadas;
}

tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener("click", function() {
        tarjeta.classList.toggle("seleccionada");
        actualizarContador();
    });
});