const amigos = [];
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nombreAmigo = amigoInput.value.trim();
    
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombreAmigo);
    amigoInput.value = ""; 
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega amigos antes de sortear.");
        return;
    }

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>Amigo Secreto: ${amigoSecreto}</li>`;
}
