//23 - rest

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(2, 5, 6, 2, 4, 5.6, 32, 643, 12, 2, 3, 4, 5, 36);