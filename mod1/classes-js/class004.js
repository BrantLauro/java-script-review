function arithmetic () {
    console.log(5 + 4); // 9
    console.log(5-4); // 1
    console.log(10/2); // 5
    console.log(10 * 2); // 20
    console.log(10%2); // 0
    console.log(2**10); // 1024

    console.log(8/2*(2 + 2)); //16

    console.log(5+(2+(3+(5 + 5)))); // 20
    console.log(5+(2+(3+(5 + 5)+1)+3+(5 + 9)+4)+3); //45
}

function shortcuts () {
    let num = 4;
    num = num + 3; // valor de "num" é 7
    // também é possível com outros operadores:
    num = num ** 2; // valor de "num" é 49

    let num2 = 1;
    num2 += 3; // valor de "num2" é 4
    num2 *= 4; // valor de "num2" é 16

    let num3 = 1;
    num3 += 1; // valor de "num3" é 2
    num3 -= 1; // valor de "num3" é 1
    num3 *= 10; // valor de "num3" é 10
    num3 /= 2; // valor de "num3" é 5
    num3 %= 2; // valor de "num3" é 1
    num3 **= 3; // valor de "num3" é 1

    let num4 = 5;
    num4 ++; // valor de "num4" é 6
    num4 --; // valor de "num4" é 5

    console.log(num);
    console.log(num2);
    console.log(num3);
    console.log(num4);
}

function ld () {
    console.log(2<4); // true
    console.log(4<2); // false
    console.log(4<4); // false
}

function bd () {
    console.log(4>2); // true
    console.log(2>4); // false
    console.log(2>2); // false
}

function led () {
    console.log(2<=4); // true
    console.log(4<=2); // false
    console.log(4<=4); // true
}

function bed () {
    console.log(4>=2); // true
    console.log(2>=4); // false
    console.log(2>=2); // true
}

function equal () {
    console.log(1==1); // true
    console.log(2==1); // false
    console.log("oi"=="oi"); // true

    console.log("1"==1); // true
}

function identic () {
    console.log("1"===1); // false
    console.log(1===1); // true
    console.log("2"==="2"); //true
}

function notEqual () {
    console.log(1!=1); // false
    console.log(2!=1); // true
    console.log("oi"!="ei"); // true

    console.log("1"!=1); // false
}

function notIdentic () {
    console.log("1"!==1); // true
    console.log(2!==3); // true
    console.log(1!==1); // false
    console.log("2"!=="2"); // false
}

function and () {
    console.log(true && true); // true
    console.log(false && false); // false
    console.log(false && true); // false
    console.log(1 == 1 && 2 == 2); // true
    console.log(1 == 1 && 2 == 1); // false
}

function or () {
    console.log(true || true); // true
    console.log(false || false); // false
    console.log(false || true); // true
    console.log(1 == 1 || 2 == 2); // true
    console.log(1 == 1 || 2 == 1); // true
    console.log(1 == 2 || 2 == 1); // false
}

function not () {
    console.log(!(1==1)); // false
    console.log(!(1==2)); // true
}

arithmetic();

let c = 2;

console.log(3 + 4 <= 5 + 3); // true

// Essa expressão está certa, primeiro ele vai fazer as operações para depois comparar, mas para evitar problemas, tente fazer da seguinte forma:

console.log((3 + 4) <= (5 + 3)); // true

// Para deixar claro que você quer que o programa realize as operações antes de comparar e etc.
