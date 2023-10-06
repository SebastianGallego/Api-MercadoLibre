const resultsContainer = document.getElementById("results");

// Consulta a la API de ML
fetch(
  "https://api.mercadolibre.com/sites/MLA/search?q=Zapatillas%20Running%20Mujer&limit=10&sort=relevance"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    getResults(data);
  })
  .catch((error) => {
    console.error("Error al obtener datos de la API:", error);
  });

//Recibe el json de la consulta y lo muestra en pantalla

function getResults(data) {
  data.results.forEach((result) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
    <div class="card">
        <h3>${result.title}</h3>
        <p>Precio: $${result.price}</p>
        <img src="${result.thumbnail}" alt="${result.title}">
    </div>

  `;
    resultsContainer.appendChild(itemElement);
  });
}

/* Ejemlo Tarjeta

tarjeta.innerHTML = `
<img src="${producto.imagenUrl}" class="card-img-top" alt="${
      producto.articulo
    }" id="imagen">
<div class="card-body">
<h5 class="card-title">${producto.articulo}</h5>
<i class="favoritoUnSelected">★</i>
<p class="card-text" id="detalle">${producto.detalle}</p>
<p class="card-text" id="precio">Precio: $${producto.precio.toFixed(2)}</p>
</div>

*/
