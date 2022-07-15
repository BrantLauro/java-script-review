let wordSimple = "simple";
let wordString = "Strings";
let frase = "Is" + wordSimple + "to concat" + wordString;
console.log(frase);

// lembrando que nomes de variáveis não ficam entre aspas, pois não são Strings

// Saída: Issimpleto concatStrings

// Como você pode ver, ele nem sequer separou as palavras, é possível separar adicionando espaços:

frase = "Is " + wordSimple + " to concat " + wordString;
console.log(frase);

// Saída: Is simple to concat Strings

/* Obs.: usando vírgulas, essa frase já teria espaços automaticamente, porém, não é possível imprimir essa frase concatenando com vírgulas usando o console.log(frase), por motivos de loucuras do JS, mas é possível colocar a frase diretamente no console.log, da seguinte forma: */

console.log("Is", wordSimple, "to concat", wordString);

// Saída: Is simple to concat Strings

/* Lembrando que é uma boa prática utilizar variáveis para armazenar todo tipo de dado que será utilizado múltiplas vezes no código para que não haja repetição e deixe o código mais legível. Além do fato de que se você precisar mudar o valor da variável, você pode mudá-la somente uma vez e já terá mudado em todo o código, usando o que chamamos de código literal (dados que são estão dentro de variáveis), você terá que mudar manualmente em cada lugar do código que você utilizou aquele dado. */

// Agora a melhor forma (na minha opinião) de concatenar Strings:

frase = (`Is ${wordSimple} to concat ${wordString}`);
console.log(frase);

// Saída: Is simple to concat Strings

/* Como vocês podem ver, a String está entre crazes, e as variáveis a serem concatenadas estão dentro da própria String dentro de ${}, o que facilita muito na hora de escrever o código! */

console.log("Is", wordSimple, "to\nconcat", wordString);

/* Saída:
Is simple to
concat Strings */

/* Obs.: o \n tem que estar dentro das aspas e tudo que estiver depois vai aparecer na próxima linha, portanto, se tivesse um espaço entre o \n e concatenar, o espaço iria junto para a próxima linha */

/* Mas para quebrar com a "format string" a string entre crazes, basta quebrar a linha no próprio código, da seguinte forma: */

console.log(`Is ${wordSimple} to
concat ${wordString}`);

/* Saída:
Is simple to
concat Strings */

// Adicionar símbolos e emojis:

console.log("This frase has an emoji: \u2728");
console.log("This frase has a symbol: \u262D");

/* Saída:
This frase has an emoji: ✨
This frase has a symbol: ☭ */

console.log("This frase has an emoji 😃");
console.log("This frase has a symbol: ℭ");

/* Saída:
This frase has an emoji: 😃
This frase has a symbol: ℭ */

// Para usar aspas dentro da String:

console.log("He read \"The Cremation of Sam McGee\" by R.W. Service.");

// Saída: He read "The Cremation of Sam McGee" by R.W. Service.

// Observe que se usou uma \ antes das aspas e depois outra \ novamente antes da aspa final

// Para mostra a própria \:

console.log("c:\\temp");

// Saída: c:\temp

// Para quebrar a String em aspas, dentro do código, sem que gere uma mensagem de erro:

console.log("This string \
is broke \
in multiple\
lines.");
console.log("Roses are red\n\
Violets are blue,\n\
That your smile\n\
is what seduce me. (Lucas Pedrosa)");

/* Saída: This string is broke in multiple lines. 
Roses are red
Violets are blue,
That your smile
is what seduce me. (Lucas Pedrosa) */

let a;
let b = null;

console.log(a); // undefined
console.log(b); // null

let answer = 42;
answer = "Thanks for the fishes...";
console.log(typeof("Pablo")); // string
console.log(typeof(3)); // number
console.log(typeof(5.3)); // number
console.log(typeof(true)); // boolean
let list = [1, 2, 3]; // Não se preocupe com isso
console.log(typeof(list)); // object
console.log(typeof(a)); // undefined
