const form = document.getElementById('form-tarefas');
const nomes = [];
const novoItem= document.createElement('td');
const novaCelula= document.createElement('tbody');
novaCelula.style.cursor = 'pointer'; 

// const numeros = [];
let linhas='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabelaNew3();
    const novaCelula = $('#lista-tarefas').val();
    const novoItem = $('<li></li>');
    $(`<td />`).appendTo(novoItem);
});

function adicionaLinha () {
    const inputNomeTarefa = document.getElementById('nome-tarefa');
   // const inputNumeroContato = document.getElementById('telefone-contato');
    
    if (nomes.includes(inputNomeTarefa.value)) {
        alert(`O Nome: ${inputNomeTarefa.value} já foi inserido`);
    } else {

        nomes.push(inputNomeTarefa.value);
    // numeros.push(parseFloat(inputNumeroContato.value));

        
        let linha = '<tr>';
        linha += `<td>${inputNomeTarefa.value}</td>`;
        // linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas = linha;
    }

    inputNomeTarefa.value = '';
// inputNumeroContato.value = '';
}

// o problema no código abaixo acontecia porque, quando era adicionado um novo elemento à tabela, a tabela antiga deixava de existir
// e era substituída por uma nova, com os mesmos valores mas com funções diferentes, pois não era transferido também o evento do click.
function atualizaTabelaNew3() {
    const corpoTabela = document.querySelector('tbody');
    //corpoTabela.innerHTML = linhas;
    corpoTabela.insertAdjacentHTML("beforeend", linhas);
    //console.log("ciao "+linhas)
    //corpoTabela.append(linhas)
}



//função do risco quando clicado na nova célula da tabela dinâmica

let celulasRiscadas = [];
const corpoTabela = document.querySelector('tbody');
corpoTabela.addEventListener('click', function(event) {
    if (event.target.tagName === 'TD') {
        event.target.classList.toggle('riscado');
        if (event.target.classList.contains('riscado')) {
            celulasRiscadas.push(event.target);
        } else {
            const index = celulasRiscadas.indexOf(event.target);
            if (index !== -1) {
                celulasRiscadas.splice(index, 1);
            }
        }
    }
});
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    celulasRiscadas.forEach(celula => celula.classList.add('riscado'));
}



// corpoTabela.addEventListener('click', function(event) {
    //if (event.target.tagName === 'TD') {
     //   event.target.classList.toggle('riscado');

// const corpoTabela = document.querySelector('tbody');
// corpoTabela.addEventListener('click', function(event) {
// if (event.target.tagName === 'TD') {
//       event.target.classList.toggle('riscado');
