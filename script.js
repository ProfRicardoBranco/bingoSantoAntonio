const bingoTable = document.getElementById('bingoTable');
const sortearBtn = document.getElementById('sortearBtn');
const numerosSorteados = new Set(); // Usando um conjunto para garantir números únicos

const coresLinhas = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#ff8000', '#8000ff', '#0080ff', '#80ff00'];

// Função para verificar se todos os números já foram sorteados
function todosSorteados() {
    return numerosSorteados.size === 100;
}

// Função para gerar um número aleatório
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Função para marcar o número sorteado na tabela
function marcarNumeroSorteado(numeroSorteado) {
    const cellIndex = numeroSorteado - 1; // Índice da célula na tabela
    const rowNumber = Math.floor(cellIndex / 10); // Número da linha
    const colNumber = cellIndex % 10; // Número da coluna
    
    const cell = bingoTable.rows[rowNumber].cells[colNumber];
    cell.classList.add('marked');
    cell.style.backgroundColor = '#28a745'; // Altera a cor de fundo da célula
}

sortearBtn.addEventListener('click', () => {
    if (todosSorteados()) {
        alert('Todos os números já foram sorteados!');
        return;
    }

    let numeroSorteado;
    
    do {
        numeroSorteado = gerarNumeroAleatorio();
    } while (numerosSorteados.has(numeroSorteado));

    numerosSorteados.add(numeroSorteado);
    marcarNumeroSorteado(numeroSorteado);

    const enviarAlerta = document.getElementById('enviarAlerta').checked;
    if (enviarAlerta) {
        alert(`Número sorteado: ${numeroSorteado}`);
    }
});

// Preencher a tabela com os números de 1 a 100 em uma grade 10x10
for (let i = 1; i <= 100; i++) {
    if ((i - 1) % 10 === 0) {
        var row = bingoTable.insertRow();
    }
    const cell = row.insertCell();
    cell.textContent = i;
    cell.style.padding = '5px 10px';
    cell.style.fontSize = '40px';
    cell.style.fontWeight = 'bold';

    const linha = Math.floor((i - 1) / 10);
    const intensidadeCor = (i - 1) % 10;
    cell.style.backgroundColor = coresLinhas[linha] + intensidadeCor.toString(16).repeat(2);
}
