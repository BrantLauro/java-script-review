console.log("Pãozinho delícia");

let num1 = 5;
let num2 = 899990098890431570847158947137895;

const soma = function (a, b){
    return(a + b);
}

const subtracao = (a, b) => a - b;

const multipicacao = (a, b) => {
    return(a * b);
}

function imprimirSoma(a = 0, b = 0) {
    console.log(a + b);
}

imprimirSoma(num1, num2);
imprimirSoma();
imprimirSoma(3);
imprimirSoma(9, 5, 6, 7565, 5);
console.log(soma(1, 7));
console.log(subtracao(5, 6));
console.log(multipicacao(9, 1)); 
