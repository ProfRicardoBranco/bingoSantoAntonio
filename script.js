const bingoTable = document.getElementById('bingoTable');
const sortearBtn = document.getElementById('sortearBtn');
const numeroSorteadoElement = document.getElementById('numeroSorteado');
let numerosSorteados = [];

// Preencher a tabela com os números de 1 a 100 em uma grade 10x10
for (let i = 1; i <= 100; i++) {
    if ((i - 1) % 10 === 0) {
        var row = bingoTable.insertRow();
        row.classList.add(`linha-${Math.floor(i / 10)}`);
    }
    const cell = row.insertCell();
    cell.textContent = i;
    cell.style.padding = '5px 10px'; // Adiciona espaçamento interno
    cell.style.fontSize = '40px'; // Define o tamanho da fonte como 40
    cell.style.fontWeight = 'bold'; // Define a fonte como negrito
}

// Adiciona o CSS dinamicamente
const style = document.createElement('style');
document.head.appendChild(style);
const sheet = style.sheet;

// Adiciona regras CSS para cada linha da tabela
for (let i = 0; i < 10; i++) {
    const linhaRule = `.linha-${i} .marked { background-color: ${getRandomColor()}; }`;
    sheet.insertRule(linhaRule);
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
    
    // Remove a classe 'marked' de todas as células
    const markedCells = document.querySelectorAll('.marked');
    markedCells.forEach(cell => {
        cell.classList.remove('marked');
    });

    // Adiciona a classe 'marked' à célula sorteada
    const cell = bingoTable.rows[rowNumber].cells[colNumber];
    cell.classList.add('marked');
    
    // Limpa o conteúdo anteriormente adicionado
    numeroSorteadoElement.innerHTML = '';

    // Cria um elemento <p> para exibir o texto "Foi sorteado o número"
    const textoSorteado = document.createElement('p');
    textoSorteado.textContent = 'Foi sorteado o número:';
    textoSorteado.classList.add('numero-sorteado');
    numeroSorteadoElement.appendChild(textoSorteado);

    // Cria um elemento <span> para exibir o número sorteado
    const numeroSorteadoSpan = document.createElement('span');
    numeroSorteadoSpan.textContent = numeroSorteado;
    numeroSorteadoSpan.classList.add('numero-sorteado-grande');
    numeroSorteadoElement.appendChild(numeroSorteadoSpan);
});

// Seleciona o botão "Novo Jogo"
const novoJogoBtn = document.getElementById('novoJogoBtn');

// Adiciona um ouvinte de eventos de clique ao botão "Novo Jogo"
novoJogoBtn.addEventListener('click', () => {
    // Reinicia as variáveis do jogo e limpa as marcações
    resetarJogo();
});

// Função para reiniciar o jogo
function resetarJogo() {
    // Limpa a tabela
    limparTabela();
    
    // Reinicia as variáveis
    numerosSorteados = [];
    // Limpa o texto de número sorteado
    const numeroSorteadoElement = document.getElementById('numeroSorteado');
    numeroSorteadoElement.textContent = '';
}

// Função para limpar a tabela (remover marcações)
function limparTabela() {
    // Remove a classe 'marked' de todas as células da tabela
    const markedCells = document.querySelectorAll('.marked');
    markedCells.forEach(cell => {
        cell.classList.remove('marked');
    });
}

// Função auxiliar para gerar cores aleatórias
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
