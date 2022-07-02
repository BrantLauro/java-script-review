
// Aqui estou declarando as variáveis, boolean, string, e numbers
let bol = false;
let str = "Wake up little Pedro";
let numInt = 4;
let numFlo = 6.5;

// Aqui criei uma função que imprime no terminal o tipo da variável passada como parâmetro na chamada da função para facilitar e tornar o código mais legível
function typeOfVar(varName){
    console.log(typeof(varName))
}

// Aqui eu chamo a função 4 vezes, um para cada variável que eu criei, de forma que o console mostre o tipo de cada uma
typeOfVar(bol);
typeOfVar(str);
typeOfVar(numInt);
typeOfVar(numFlo);
