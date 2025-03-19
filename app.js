// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para incorporar los nombres de amigos.
let amigos = [];

// Función para incorporar amigos.
function agregarAmigo() {
  const nombreDeAmigo = document.getElementById("amigo").value;

// La condición verifica si la variable - nombreAmigo - está vacía o espacios en blanco.
  if (nombreDeAmigo.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombreDeAmigo);
  document.getElementById('amigo').value = '';
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigos[i];
    listaAmigos.appendChild(nuevoAmigo);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById('resultado').innerHTML = `<li>El amigo  secreto es: ${amigoSorteado}</li>`;
}

  function reiniciarSorteo() {
    listaAmigos = []; // Vacía la lista de amigos
    document.getElementById('listaAmigos').innerHTML = ''; // Limpia la visualización de la lista
    document.getElementById('resultado').innerHTML = ''; // Limpia el resultado del sorteo
    alert('El sorteo ha sido reiniciado. Puedes comenzar de nuevo.');
  }