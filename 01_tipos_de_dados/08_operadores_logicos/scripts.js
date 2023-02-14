console.log('Tabela verdade do &&');
console.log(5 > 3 && 3 == 2); //Retorna false, pois o && precisa das duas comparações verdadeiras
console.log(5 > 3 || 3 == 2); //Retorna true, pois o || precisa de apenas uma comparação verdadeira
console.log(3 == 3 && 'Enzo' == 'Enzo');//Retorna true, as duas condições são verdadeiras
console.log('Enzo' == 'Marcos' || false); //Retorna false, as duas condições são falsas
console.log(!(3 < 5)) //Retorna false, pois ! inverte a condição
console.log(!(!(3 < 5))) //Retorna true-, pois ! inverte a condição
