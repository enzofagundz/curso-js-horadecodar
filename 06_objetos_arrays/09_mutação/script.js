//09 - mutação

let pessoa = {
    nome: 'Enzo'
}

let pessoa2 = pessoa;

console.log(pessoa2 == pessoa);

pessoa2.nome = 'Pedro'; // Ele está referenciado ao primeiro, logo, altera o pessoa.nome também

console.log(pessoa2, pessoa);

let pessoa3 = {
    nome: 'Pedro'
}

console.log(pessoa3 == pessoa2); //Será false
