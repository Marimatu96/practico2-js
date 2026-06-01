const peliculas = [
    { titulo: "El Conjuro", categoria: "terror" },
    { titulo: "It", categoria: "terror" },
    { titulo: "Son Como Niños", categoria: "comedia" },
    { titulo: "Mulan", categoria: "animacion" },
    { titulo: "Titanic", categoria: "romance" },
    { titulo: "La Propuesta", categoria: "romance" }
];

function mostrarPeliculas(lista) {
    const contenedor = document.getElementById("lista-peliculas");
    contenedor.innerHTML = "";
    lista.map(function(pelicula) {
        const card = document.createElement("div");
        card.classList.add("card-pelicula");
        const titulo = document.createElement("h2");
        titulo.textContent = pelicula.titulo;
        const categoria = document.createElement("p");
        categoria.textContent = "Categoría: " + pelicula.categoria;
        card.appendChild(titulo);
        card.appendChild(categoria);
        contenedor.appendChild(card);
    });
}

document.getElementById("btn-todos").addEventListener("click", function() {
    mostrarPeliculas(peliculas);
});

document.getElementById("btn-terror").addEventListener("click", function() {
    const soloTerror = peliculas.filter(function(pelicula) {
        return pelicula.categoria === "terror";
    });
    mostrarPeliculas(soloTerror);
});

mostrarPeliculas(peliculas);