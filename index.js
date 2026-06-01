const meriendas = [
    "Mate con facturas",
    "Tostadas con dulce de leche",
    "Medialunas con café con leche",
    "Bizcochos con mate cocido",
    "Licuado de banana con leche"
];

function mostrarMeriendas() {
    const lista = document.getElementById("lista-meriendas");
    meriendas.map(function(merienda) {
        const item = document.createElement("div");
        item.classList.add("merienda");
        item.textContent = merienda;
        lista.appendChild(item);
    });
}

document.getElementById("btn-contar").addEventListener("click", function() {
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Hay " + meriendas.length + " meriendas en el menú.";
});

mostrarMeriendas();