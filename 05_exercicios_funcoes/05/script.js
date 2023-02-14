//Ex 05 - Escreva uma função que recebe a idade de uma pessoa, se ela tiver mais de 18 anos, pode entrar na auto escola. Imprima uma mensagem informando isso. Se ela tiver menos, não pode, imprima outra mensagem informando isso.

function testarIdade (idade) {
    if(idade >= 18) {
        console.log(`Você possui ${idade} anos. Está liberado para tirar sua carteira de motorista.`);
    } else {
        console.log(`Você possui ${idade} anos. Não está liberado para tirar sua carteira de motorista.`);
    }
}

testarIdade(18);
testarIdade(15);
testarIdade(25);