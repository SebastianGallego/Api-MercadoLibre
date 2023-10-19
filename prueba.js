let tiempoTranscurrido = Date.now();
let ahora = new Date(tiempoTranscurrido);

function actualizarHora() {
  tiempoTranscurrido = Date.now();
  ahora = new Date(tiempoTranscurrido);
  console.log(ahora);
}

// Llama a la función para actualizar la hora cada 5 segundos

export { ahora };
export { actualizarHora };
