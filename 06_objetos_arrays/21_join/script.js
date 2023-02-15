//21 - join

let endereco = 'Rua das Árvores, 530, Centro, Simonal, PR'

let enderecoDividido = endereco.split(', ');

console.log(enderecoDividido);

let novoEndereco = enderecoDividido.join(', ');

console.log(novoEndereco);