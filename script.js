document.addEventListener('DOMContentLoaded', function() {
    const iniciarJogoBtn = document.getElementById('iniciarJogoBtn');
    const maximoBingoInput = document.getElementById('maximoBingoInput');
    
    // Chamada inicial para desenhar a tabela com o valor padrão (100)
    reiniciarJogo(parseInt(maximoBingoInput.value));

    iniciarJogoBtn.addEventListener('click', () => {
        const maximoBingo = parseInt(maximoBingoInput.value);

        if (isNaN(maximoBingo) || maximoBingo <= 0) {
            alert('Por favor, insira um número válido para o bingo.');
            return;
        }

        reiniciarJogo(maximoBingo);
    });
});

const bingoTable = document.getElementById('bingoTable');
const numerosSorteados = new Set(); // Usando um conjunto para garantir números únicos

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
