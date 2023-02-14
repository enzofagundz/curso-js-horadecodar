//07 - assign

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2009,
    portas: 2, 
    portaMalas: '200L',
    motor: '2.0'
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true,
}

console.log(carro);

//o primeiro parâmetro recebe as propriedades do segundo parâmetro
Object.assign(carro, adicionais);

console.log(carro);