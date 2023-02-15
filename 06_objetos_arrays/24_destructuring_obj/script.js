//24 - destructuring em objetos

const pessoa = {
    nome: 'Enzo',
    sobrenome: 'Fagundes',
    idade: 20
}

const {nome: nomeUsuario, sobrenome: sobrenomeUsuario, idade: idadeUsuario} = pessoa;

console.log(nomeUsuario);
console.log(sobrenomeUsuario);
console.log(idadeUsuario);