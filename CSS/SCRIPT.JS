
async function obtenerPersonaje(id) {
    const respuesta = await fetch`https://swapi.dev/api/people/$%7Bid%7D/`};
    const data = await respuesta.json();
    return data;
  }
  
  
  function* generarPersonajes(ids) {
    for (let id of ids) {
      const personaje = yield obtenerPersonaje(id);
      mostrarPersonaje(personaje);
    }
  }
  
  
  function mostrarPersonaje(personaje) {
    const contenedor = document.getElementById('contenedor');
    const bloque = document.createElement('div');
    bloque.innerHTML = `
      <h3>${personaje.name}</h3>
      <p>Estatura: ${personaje.height} cm</p>
      <p>Peso: ${personaje.mass} kg</p>
    `;
    contenedor.appendChild(bloque);
  }
  
  /
  document.getElementById('rango1').addEventListener('mouseover', () => {
    const generador = generarPersonajes([1, 2, 3, 4, 5]);
    for (let i = 1; i <= 5; i++) {
      generador.next().value.then(personaje => generador.next(personaje));
    }
  });