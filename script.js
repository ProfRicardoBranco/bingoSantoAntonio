const bingoTable = document.getElementById('bingoTable');
const sortearBtn = document.getElementById('sortearBtn');
let numerosSorteados = [];

// Preencher a tabela com os números de 1 a 100 em uma grade 10x10
for (let i = 1; i <= 100; i++) {
    if ((i - 1) % 10 === 0) {
        var row = bingoTable.insertRow();
    }
    const cell = row.insertCell();
    cell.textContent = i;
    cell.style.padding = '10px'; // Adiciona espaçamento interno
    cell.style.fontSize = '40px'; // Define o tamanho da fonte como 40
    cell.style.fontWeight = 'bold'; // Define a fonte como negrito
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
    const rowNumber = Math.floor(cellIndex / 10); // Número da linha
    const colNumber = cellIndex % 10; // Número da coluna
    
    const cell = bingoTable.rows[rowNumber].cells[colNumber];
    
    cell.classList.add('marked');
    cell.style.backgroundColor = '#28a745'; // Altera a cor de fundo da célula

    alert(`Número sorteado: ${numeroSorteado}`);
});