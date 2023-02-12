function soma(a, b)
{
    if(a === undefined || b === undefined)
    {
        console.log('Esta função precisa de dois os argumentos');
    }
    else
    {
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1, 2));

function saudacao (nome, cidade)
{
    if (cidade === undefined)
    {
        console.log(`Olá, ${nome}!`);
    }
    else
    {
        console.log(`Olá, ${nome} de ${cidade}. Como está?`);
    }
}

console.log(saudacao('Enzo'));
console.log(saudacao('Enzo', 'Sabino - SP'));