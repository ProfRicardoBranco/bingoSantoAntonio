document.getElementById('sortearBtn').addEventListener('click', () => {
    const enviarAlerta = document.getElementById('enviarAlerta').checked; // Verifica se o alerta deve ser enviado
    const numeroSorteado = sortearNumero();

    marcarNumeroSorteado(numeroSorteado);

    if (enviarAlerta) {
        alert(`Número sorteado: ${numeroSorteado}`);
    }
});

function sortearNumero() {
    let numeroSorteado;

    do {
        numeroSorteado = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório de 1 a 100
    } while (numerosSorteados.includes(numeroSorteado));

    numerosSorteados.push(numeroSorteado);

    return numeroSorteado;
}
