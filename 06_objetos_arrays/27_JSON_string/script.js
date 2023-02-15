//26 - JSON

let pessoa = {
    "nome": "Enzo",
    "idade": 20,
    "profissao": "desenvolvedor",
    "linguagens": ["JavaScript", "PHP", "C"]
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
console.log(typeof(pessoaTexto));

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
console.log(typeof(pessoaJSON));