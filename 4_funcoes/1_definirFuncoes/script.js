function imprimirNoConsole() {
    console.log('Olá, estou imprimindo no console!');
}

imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log(`O número é ${num}`);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);

const numeroAleatorio = function() {
    console.log((Math.random() * 10).toFixed(2));
}

numeroAleatorio();