document.addEventListener('DOMContentLoaded', function() {
    const iniciarJogoBtn = document.getElementById('iniciarJogoBtn');
    const sortearBtn = document.getElementById('sortearBtn');
    const novoJogoBtn = document.getElementById('novoJogoBtn');
    const bingoTable = document.getElementById('bingoTable');
    const maximoBingoInput = document.getElementById('maximoBingoInput');
    let numerosSorteados = new Set(); // Usando um conjunto para garantir números únicos
    let maximoBingo = parseInt(maximoBingoInput.value);

    // Chamada inicial para desenhar a tabela com o valor padrão (100)
    reiniciarJogo(maximoBingo);

    iniciarJogoBtn.addEventListener('click', () => {
        maximoBingo = parseInt(maximoBingoInput.value);

        if (isNaN(maximoBingo) || maximoBingo <= 0) {
            alert('Por favor, insira um número válido para o bingo.');
            return;
        }

        reiniciarJogo(maximoBingo);
        numerosSorteados = new Set(); // Reinicia o conjunto de números sorteados
        alert('Botão Iniciar Jogo clicado');
    });

    sortearBtn.addEventListener('click', () => {
        if (numerosSorteados.size === maximoBingo) {
            alert('Todos os números já foram sorteados!');
            return;
        }

        let numeroSorteado;

        do {
            numeroSorteado = gerarNumeroAleatorio(maximoBingo);
        } while (numerosSorteados.has(numeroSorteado));

        numerosSorteados.add(numeroSorteado);
        marcarNumeroSorteado(numeroSorteado);
        alert('Botão Sortear clicado');
    });

    novoJogoBtn.addEventListener('click', () => {
        reiniciarJogo(maximoBingo);
        numerosSorteados = new Set(); // Reinicia o conjunto de números sorteados
        alert('Botão Novo Jogo clicado');
    });
});

// Função para limpar a tabela e reiniciar o jogo
function reiniciarJogo(maximoBingo) {
    const bingoTable = document.getElementById('bingoTable');

    // Limpa a tabela
    bingoTable.innerHTML = '';

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

// Função para gerar um número aleatório
function gerarNumeroAleatorio(maximo) {
    return Math.floor(Math.random() * maximo) + 1;
}

// Função para marcar o número sorteado na tabela
function marcarNumeroSorteado(numeroSorteado) {
    const cellIndex = numeroSorteado - 1; // Índice da célula na tabela
    const rowNumber = Math.floor(cellIndex / 10); // Número da linha
    const colNumber = cellIndex % 10; // Número da coluna
    const bingoTable = document.getElementById('bingoTable');
    const cell = bingoTable.rows[rowNumber].cells[colNumber];
    cell.classList.add('marked');
    cell.style.backgroundColor = '#28a745'; // Altera a cor de fundo da célula
}
