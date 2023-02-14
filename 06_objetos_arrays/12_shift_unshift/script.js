//12 - Shift e Unshift

let carros = ['BMW', 'Audi', 'VW', 'Fiat'];

//Remover primeiro elemento
let elementoRemovido = carros.shift();

console.log(elementoRemovido);
console.log(carros);

//Adicionar ao primeiro elemento
carros.unshift('Ferrari');
console.log(carros);