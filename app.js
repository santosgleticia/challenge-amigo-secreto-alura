let listaDeAmigos = [];

function adicionarAmigo() {
    let campoAmigoAdicionado = document.querySelector('input').value;

    if(campoAmigoAdicionado == '') {
        alert('Por favor, insira um nome.');
        return;
    } else if (listaDeAmigos.includes(campoAmigoAdicionado)) {
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

    for(i = 0; i <= listaDeAmigos.length - 1; i++) {
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

    let amigoAleatorioSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    console.log(amigoAleatorioSorteado);

    let resultadoDoSorteio = listaDeAmigos[amigoAleatorioSorteado];

    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = (`O amigo secreto sorteado é: ${resultadoDoSorteio}`);
}

function reiniciarJogo() {
    listaDeAmigos = [];
    criacaoListaDeAmigos();
    
    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = '';

    document.getElementById('listaAmigos').style.display = 'block';
}