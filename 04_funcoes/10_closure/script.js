function lembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(4);
console.log(soma1(2));

let soma2 = lembrarSoma(25);
console.log(soma2(22));

function contador(i) {
    let cont = i;

    let somarContador = function() {
        console.log(cont);
        cont++;
    }

    return somarContador;
}

let meuContador = contador(5);

meuContador();
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(1);

meuContador2();
meuContador2();
meuContador2();