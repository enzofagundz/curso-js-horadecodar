function multiplicarTresNumeros(x, y, z)
{
    return x * y * z;
}

console.log(`O resultado da multiplicação é ${multiplicarTresNumeros(2, 4, 5)}`);

function podeDirigir(idade, cnh)
{
    if(idade >= 18 && cnh == true)
    {
        console.log('Pode dirigir!');
    }
    else
    {
        console.log('Não pode dirigir.')
    }
}

podeDirigir(18, true);
podeDirigir(19, 0);
podeDirigir(17, 0);
podeDirigir(25, 1);