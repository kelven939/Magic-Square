function verificarQuadradoMagico() {
    // Obter os valores da tabela
    let valores = [];
    const cells = document.querySelectorAll('#quadradoMagico td');
    cells.forEach(cell => {
        valores.push(parseInt(cell.innerText) || 0);
    });

    // Verificar se é um quadrado mágico
    const somaD1 = valores[0] + valores[4] + valores[8];
    const somaD2 = valores[2] + valores[4] + valores[6];

    if (somaD1 !== 15 || somaD2 !== 15) {
        alert("Oops, não é um quadrado mágico!");
        return;
    }

    for (let i = 0; i < 3; i++) {
        const somaLinha = valores[i * 3] + valores[i * 3 + 1] + valores[i * 3 + 2];
        const somaColuna = valores[i] + valores[i + 3] + valores[i + 6];

        if (somaLinha !== 15 || somaColuna !== 15) {
            alert("Oops, não é um quadrado mágico!");
            return;
        }
    }
    alert("Parabéns, é um quadrado mágico!");
}