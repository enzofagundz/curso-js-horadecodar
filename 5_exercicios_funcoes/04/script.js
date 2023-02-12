//Ex 04 - Escreva uma função que retorne um número aleatório, o número máximo deve ser passado via parâmetro

function numeroAleatorio (max) {
    return Math.floor(max * Math.random());
}

console.log(`Número aleatório: ${numeroAleatorio(10)}`);