const bingoTable = document.getElementById('bingoTable');
const sortearBtn = document.getElementById('sortearBtn');
let numerosSorteados = [];

// Preencher a tabela com os números de 1 a 100
for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('td');
    cell.textContent = i;
    bingoTable.appendChild(cell);
}

sortearBtn.addEventListener('click', () => {
    if (numerosSorteados.length === 100) {
        alert('Todos os números já foram sorteados!');
        return;
    }

    let numeroSorteado;
    
    do {
        numeroSorteado = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório de 1 a 100
    } while (numerosSorteados.includes(numeroSorteado));

    numerosSorteados.push(numeroSorteado);
    
    const cellIndex = numeroSorteado - 1; // Índice da célula na tabela
    const cell = bingoTable.getElementsByTagName('td')[cellIndex];
    
    cell.style.backgroundColor = '#007bff';
});