//Ex 08 - Escreva uma função que receba uma string, se o texto conter 10 caracteres imprima "Texto muito longo". Se conter menos, imprima "Texto dentro do limite".

function tamanhoTexto (texto) {
    if(texto.length > 10) {
        console.log('Texto muito longo');
    } else {
        console.log('Texto dentro do limite');
    }
}

tamanhoTexto('Olá meus amigo');
tamanhoTexto('Blue pen');