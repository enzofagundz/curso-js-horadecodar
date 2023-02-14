const nome = 'Enzo'; //Este valor não poderá ser alterado durante o código
const ip = '127.0.0.1';
//ip = '125.1.1.50' Esta tentativa causaria um erro

console.log(nome);
console.log(`Meu nome é ${nome}`);
console.log('Meu nome é ' + nome);

var laranjas = 5;
console.log(laranjas * laranjas);

laranjas = laranjas + 1; //Alterar valor durante o código
console.log(laranjas);

//Alterar o tipo
laranjas = 'Laranja';

//Várias variáveis em uma linha
var quadrado = 4, triangulo = 3, hexagono = 6; //não muito aconselhável
console.log(quadrado, triangulo, hexagono);

