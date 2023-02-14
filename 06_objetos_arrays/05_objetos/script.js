//05 - objetos

let cachorro = { //usam chaves ao invés de colchetes
    nome: 'Guinho', 
    patas: 4,
    idade: 2,
    latir: function() {
        console.log('Au au');
    }
}

console.log(cachorro.nome); //sao propriedades
console.log(cachorro.patas);
console.log(cachorro.idade);

cachorro.latir(); //método