let listaDeAmigos = [];

function adicionarAmigo() {
    let amigoAdicionado = document.querySelector('input').value;

    if (amigoAdicionado == '') {
        alert('Por favor, insira um nome.');
    } else {
        listaDeAmigos.push(amigoAdicionado);
    }

    amigoAdicionado = document.querySelector('input');
    amigoAdicionado.value = '';
}