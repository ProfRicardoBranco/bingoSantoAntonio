const iniciarJogoBtn = document.getElementById('iniciarJogoBtn');
const bingoTable = document.getElementById('bingoTable');
const sortearBtn = document.getElementById('sortearBtn');
const novoJogoBtn = document.getElementById('novoJogoBtn');
const maximoBingoInput = document.getElementById('maximoBingoInput');
const numerosSorteados = new Set(); // Usando um conjunto para garantir números únicos
let maximoBingo = parseInt(maximoBingoInput.value);

document.addEventListener('DOMContentLoaded', function() {
    // Chamada inicial para desenhar a tabela com o valor padrão (100)
    reiniciarJogo(maximoBingo);

    iniciarJogoBtn.addEventListener('click', () => {
        maximoBingo = parseInt(maximoBingoInput.value);

        if (isNaN(maximoBingo) || maximoBingo <= 0) {
            alert('Por favor, insira um número válido para o bingo.');
            return;
        }

        reiniciarJogo(maximoBingo);
    });

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

    novoJogoBtn.addEventListener('click', () => {
        reiniciarJogo(maximoBingo);
    });
});

// Função para limpar a tabela e reiniciar o jogo
function reiniciarJogo(maximoBingo) {
    // Limpa a tabela
    bingoTable.innerHTML = '';

    // Limpa o conjunto de números sorteados
    numerosSorteados.clear();

    // Preenche a tabela novamente
    for (let i = 1; i <= maximoBingo; i++) {
        if ((i - 1) % 10 === 0) {
            var row = bingoTable.insertRow();
        }
        const cell = row.insertCell();
        cell.textContent = i;
        cell.style.padding = '5px 10px';
        cell.style.fontSize = '40px';
        cell.style.fontWeight = 'bold';
    }
}

// Função para verificar se todos os números já foram sorteados
function todosSorteados() {
    return numerosSorteados.size === maximoBingo;
}

// Função para gerar um número aleatório
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * maximoBingo) + 1;
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
