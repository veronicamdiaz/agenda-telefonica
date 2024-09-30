const form = document.getElementById('form-agenda-telefonica');
const nomes = [];
const numeros = [];
let linhas='';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('telefone-contato');
    
    if (nomes.includes(inputNomeContato.value)) {
        alert(`O Nome: ${inputNomeContato.value} já foi inserido`);
    } else {

    nomes.push(inputNomeContato.value);
    numeros.push(parseFloat(inputNumeroContato.value));

    
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

// function atualizaMediaFinal() {
//  const mediaFinal = calculaMediaFinal();
// document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
// document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

console.log(media);
