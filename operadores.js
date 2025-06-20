// operadores aritméticos
// console.log("2 + 2 = ", 2 + 2); soma
// console.log("3 - 2 = ", 3 - 2); subtrai
// console.log("2 * 6 = ", 2 * 6); multiplica
// console.log("10 / 5 = ", 10 / 5); divide
// console.log("10 % 5 = ", 10 % 5); resto da divisão

//operadores atribuidores
// let numero = 0; // declara e atribiui no caso o 0
// console.log("numero: ", numero);
// numero  = 2; // reatribui um valor no caso o 2
// console.log("atribui: ", numero);
// //numero = numero + 3;
// numero += 3; //soma 3 ao valor que já está na variável
// console.log("somei 3: ", numero);
// numero -= 2; // subtrai 2 do que já tem na variável
// console.log("subtrai 2: ", numero);
// numero *= 4; // multiplica por 4 o que já tem na variável
// console.log("multipliquei por 4: ", numero);
// numero /= 2; // divide por 2 o que já tem na variável
// console.log("dividi por 2: ", numero);

// Operadores condicionais

// console.log("2 > 1: ", 2 > 1); // true - 2 é maior que 1
// console.log("2 < 1: ", 2 < 1); // false - 2 não é menor que 1
// console.log("2 >= 2: ", 2 >= 2); // true - 2 é igual a 2
// console.log("4 >= 3: ", 4 >= 3); // true - 4 é maior que 3

// 
// console.log("1 >= 1: ", 1 >= 1); // true -  1 é igual a 1, portanto é maior ou igual

// console.log("Vitoria == vitoria: ", 'Vitoria' == 'vitoria'); // false - as strings diferem em letras maiúsculas/minúsculas

// let senha = 1234;
// console.log("Senha: ", senha == 1234); // true - o valor é igual
// console.log("Senha: ", senha == 12345); // false - os valores são diferentes

// console.log("2 == 2: ", '2' == 2); // true - compara apenas o valor, ignora o tipo ('2' é convertido para número)
// console.log("2 != 2: ", '2' != 2); // false - os valores são iguais, então a negação é falsa

// console.log("2 === 2: ", '2' === 2); // false - tipos diferentes (string !== número)
// console.log("2 !== 2: ", '2' !== 2); // true - tipos são diferentes, mesmo valor

// Operadores lógicos

// console.log("2 && true:", 2 && true); 
// // Resultado: true
// // Explicação: o operador && (E lógico) retorna o segundo valor se ambos os valores forem "truthy".
// // No JavaScript, qualquer número diferente de 0 é considerado verdadeiro (truthy), então 2 e true são verdadeiros.

// console.log("2 == 2 && 3 == 3: ", 2 == 2 && 3 == 3); 
// // true - ambas as comparações são verdadeiras, então o resultado do "E" lógico é true

// console.log("2 == 3 || 3 == 3: ", 2 == 2 || 3 == 3); 
// // true - corrigido o primeiro teste para "2 == 2" (se foi erro de digitação)
// // No operador OU (||), basta uma das condições ser verdadeira para o resultado ser true

// console.log("2 > 3 || 3 % 2 == 0: ", 2 > 3 || 3 % 2 == 0); 
// // false - 2 não é maior que 3 (false), e 3 % 2 (resto da divisão) é 1, que não é igual a 0

// console.log("!true: ", !true); 
// // false - o operador ! (negação) inverte o valor lógico

// console.log("!false: ", !false); 
// // true - a negação de false é true

// let idade;
// if (!idade) {
//     console.log("idade deve ser declarada!");
// }
// Aqui, como `idade` não foi definida (é undefined), o valor é considerado "falsy"
// O operador ! inverte "falsy" para "true", então a mensagem será exibida







