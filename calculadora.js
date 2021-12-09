function sumar(a, b){
    return a+b;
}

function restar(a, b){
    return a-b;
}

function range(start, end){
    return (new Array(end - start + 1)).fill(undefined).map((_, k) =>k + start);
}

function multiplicar(a, b){
    return range(0, b)
            .reduce((previous, current) => previous + a)
}

function dividir(num, den){
}

console.log(dividir(90,9));