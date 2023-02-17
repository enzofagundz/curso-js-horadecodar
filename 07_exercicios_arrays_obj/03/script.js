//Exercício 3 - criar uma nova propriedade janelas no objeto ônibus, com valor  de 20 e deletar a propriedade rodas, depois imprimir a propriedade janelas

let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 3
}

onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus);