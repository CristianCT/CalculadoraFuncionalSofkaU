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
    if(a === 0 || b === 0) return 0;
    return range(0, b)
        .reduce((previous, current) => sumar(previous, a))
}

function dividir(num, den){
    if(den === 0) return null;
    if(num === 0) return 0;
    return range(1, num)
        .reduce((previous, current) => sumar(previous, multiplicar(current, den) <= num? 1: 0));
}

console.log(sumar(99, 1));
console.log(restar(55, 25));
console.log(multiplicar(5, 8));
console.log(dividir(99, 3));