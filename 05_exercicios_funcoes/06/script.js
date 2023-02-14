//Ex 06 - Escreva uma função que detecta o tipo do dado passado e retorne uma mensagem para cada tipo.

function testarTipo (dado) {
    console.log(`O tipo do dado é ${typeof(dado)}`);
}

testarTipo(50);
testarTipo(true);
testarTipo('50');
testarTipo(undefined);