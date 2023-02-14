//Ex 10 - Escreva uma função que receba um número, e o decrementa de 1 em 1 com um loop. Além disso, imprima somente os números pares no console.

function decrementar (num) {
    for(let i = num; i > 0; i--) {
        if (num % 2 == 0) {
            console.log(num);
        }

        num--;
    }
}

decrementar(10);