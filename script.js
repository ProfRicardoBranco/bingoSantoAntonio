const numeroSorteado = document.getElementById('numeroSorteado');
const sortearBtn = document.getElementById('sortearBtn');

sortearBtn.addEventListener('click', () => {
    const numero = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório de 1 a 100
    numeroSorteado.textContent = `Número sorteado: ${numero}`;
});
