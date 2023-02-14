//06 - criar e deletar propriedades de um objeto

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2009
}

console.log(carro.marca); //Toyota

//Deletando propriedade
delete carro.marca;

console.log(carro.marca); //undefined

//Criando propriedade
carro.bomEstado = true;
console.log(carro.bomEstado);