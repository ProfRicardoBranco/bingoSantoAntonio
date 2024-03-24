const bingoTable = document.getElementById('bingoTable');
const sortearBtn = document.getElementById('sortearBtn');
const numeroSorteadoElement = document.getElementById('numeroSorteado');
let numerosSorteados = [];

// Define uma paleta de cores para cada linha
const coresLinhas = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#ff8000', '#8000ff', '#0080ff', '#80ff00'];

// Preencher a tabela com os números de 1 a 100 em uma grade 10x10
for (let i = 1; i <= 100; i++) {
    if ((i - 1) % 10 === 0) {
        var row = bingoTable.insertRow();
    }
    const cell = row.insertCell();
    cell.textContent = i;
    cell.style.padding = '5px 10px'; // Adiciona espaçamento interno
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
  
    cell.style.backgroundColor = coresLinhas[rowNumber]; // Altera a cor de fundo da célula com base na linha
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
    const cells = document.querySelectorAll('#bingoTable td');
    cells.forEach(cell => {
        cell.classList.remove('marked');
        cell.style.backgroundColor = ''; // Limpa a cor de fundo
    });
}
