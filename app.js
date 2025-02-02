let listaDeAmigos = [];

function adicionarAmigo() {
    let amigoAdicionado = document.querySelector('input').value;

    if(amigoAdicionado == '') {
        alert('Por favor, insira um nome.');
    } else {
        listaDeAmigos.push(amigoAdicionado);
        console.log(listaDeAmigos);
    }

    amigoAdicionado = document.querySelector('input');
    amigoAdicionado.value = '';

    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos() {
    let exibicaoListaAmigos = document.getElementById('listaAmigos');
    exibicaoListaAmigos.innerHTML = '';

    for(i = 0; i <= listaDeAmigos.length - 1; i++) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = listaDeAmigos[i];
        exibicaoListaAmigos.appendChild(novoAmigo);
    }
}