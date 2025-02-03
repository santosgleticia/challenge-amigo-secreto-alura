let listaDeAmigos = [];
let sorteados = [];

function adicionarAmigo() {
    let campoAmigoAdicionado = document.querySelector('input').value;

    if(campoAmigoAdicionado == '') {
        alert('Por favor, insira um nome.');
        return;
    } else if(listaDeAmigos.includes(campoAmigoAdicionado)) {
        alert('Nome já existente na lista de amigos. Insira-o com alguma diferenciação.');
        return;
    } else {
        listaDeAmigos.push(campoAmigoAdicionado);
        console.log(listaDeAmigos);
    }

    campoAmigoAdicionado = document.querySelector('input');
    campoAmigoAdicionado.value = '';

    criacaoListaDeAmigos();
}

function criacaoListaDeAmigos() {
    let campoListaAmigos = document.getElementById('listaAmigos');
    campoListaAmigos.innerHTML = '';

    for(i = 0; i < listaDeAmigos.length; i++) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = listaDeAmigos[i];
        campoListaAmigos.appendChild(novoAmigo);
    }
}

function sortearAmigo() {
    if(listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia! Adicione amigos antes de sortear.');
        return;
    }

    document.getElementById('listaAmigos').style.display = 'none';

    if (sorteados.length === listaDeAmigos.length) {
        alert('Todos os amigos já foram sorteados!');
        return;
    }
    
    let amigoAleatorioSorteado;
    do {
        amigoAleatorioSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    } while (sorteados.includes(amigoAleatorioSorteado)); // Verifica se o amigo já foi sorteado

    // Obtém o amigo sorteado com base no índice
    let resultadoDoSorteio = listaDeAmigos[amigoAleatorioSorteado];

    // Adiciona o índice do amigo sorteado à lista de sorteados
    sorteados.push(amigoAleatorioSorteado);

    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = (`O amigo secreto sorteado é: ${resultadoDoSorteio}`);
}

function reiniciarJogo() {
    listaDeAmigos = [];
    sorteados = [];
    criacaoListaDeAmigos();
    
    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = '';

    document.getElementById('listaAmigos').style.display = 'block';
}