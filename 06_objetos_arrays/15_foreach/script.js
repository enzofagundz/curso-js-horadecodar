//15 - foreach

let nomes = ['Márcio', 'Helena', 'Gustavo', 'Iasmin', 'Júlia', 'Sávio'];

//funciona como um for, onde o parâmetro definido é utilizado da mesma forma que o índice. assim, em cada iteração é executada a função definida no bloco do código
nomes.forEach(nome => {
    console.log(`O nome é: ${nome}`);
});