import { ahora } from "./prueba.js";
import { actualizarHora } from "./prueba.js";

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();

  //setInterval(actualizarHora, 5000);
});

const fetchData = async () => {
  const res = await fetch("api.json");
  const data = await res.json();
  console.log(data);
  getResults(data);
};

//Recibe el json de la consulta y lo muestra en pantalla
const resultsContainer = document.getElementById("results");

async function getResults(data) {
  data.forEach((result) => {
    resultsContainer.innerHTML += `
    <div class="card">
        <img src="${result.thumbnailUrl}" alt="${result.title}">
        <h3 class="productPrice">${result.price} €</h3>
        <h3 class="brand">${result.brand}</h3>
        <h4>${result.title}</h4>
        <div class="rating">${generarEstrellas(result.rating)}</div>
        
    </div> `;
  });
}

// Función para generar estrellas en proporción al rating
function generarEstrellas(rating) {
  const estrellas = "★★★★★"; // Cinco estrellas llenas
  const estrellasVacias = "☆☆☆☆☆"; // Cinco estrellas vacías
  const valorMaximo = 5; // Valor máximo de calificación

  const estrellasLlenas = estrellas.slice(0, rating);
  const estrellasRestantes = estrellasVacias.slice(0, valorMaximo - rating);

  return estrellasLlenas + estrellasRestantes;
}
