function potencia(base, exp=2) {
    return Math.pow(base, exp);
}

console.log(potencia(2)); //Nesse caso, o valor 2 será elevado ao quadrado, pois não foi passado um valor para o expoente, então este terá o valor padrão (2)
console.log(potencia(2, 2));
console.log(potencia(2, 4));