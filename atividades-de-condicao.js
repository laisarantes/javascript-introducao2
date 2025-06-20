//1 - Verificação de Idade:
//Escreva um programa que recebe a idade de uma pessoa e imprime "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário.

// Pede para o usuário digitar a idade e converte para número inteiro
// let idade = parseInt(prompt("Digite sua idade:"));

// Verifica se a idade é 18 ou maior
// if (idade >= 18) {
// console.log("Maior de idade");
// } else {
// console.log("Menor de idade");
// }

// 2 - Número Positivo, Negativo ou Zero:
//Solicite um número ao usuário e exiba se ele é positivo, negativo ou zero.

// Solicita que o usuário digite um número e converte para número de ponto flutuante
// let numero = parseFloat(prompt("Digite um número:"));

// Verifica se o número é positivo
// if (numero > 0) {
// console.log("O número é positivo");

// Verifica se o número é negativo
// } else if (numero < 0) {
// console.log("O número é negativo");

// Se não for nem maior nem menor que zero, só pode ser zero
// } else {
//   console.log("O número é zero");
// }

// 3 - Maior entre Dois Números:
// Peça dois números e mostre qual é o maior. Se forem iguais, exiba "Os números são iguais".

// let primeiro = parseFloat(prompt("Digite o primeiro número:"));
// let segundo = parseFloat(prompt("Digite o segundo número:"));

// if (primeiro > segundo) {
//   console.log("O primeiro número é maior:", primeiro);
// } else if (segundo > primeiro) {
//   console.log("O segundo número é maior:", segundo);
// } else {
//   console.log("Os números são iguais.");
// }


// 3 - Maior entre Dois Números:
// Peça dois números e mostre qual é o maior. Se forem iguais, exiba "Os números são iguais".


// Solicita o primeiro número e converte para número com ponto flutuante
// let numero1 = parseFloat(prompt("Digite o primeiro número:"));

// Solicita o segundo número e converte também
// let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Verifica qual número é maior
// if (numero1 > numero2) {
// console.log("O primeiro número é maior:", numero1);

// } else if (numero2 > numero1) {

// A vírgula separa os argumentos do console.log, imprimindo ambos com espaço entre eles igual a + numero2
// Exemplo de saída: O primeiro número é maior: 25 
// console.log("O segundo número é maior:", numero2);

// } else {
  // Se não for maior nem menor, só pode ser igual
// console.log("Os números são iguais.");
// }

//4 - Par ou Ímpar:
// Peça um número e informe se ele é par ou ímpar.

// let numero = parseInt(prompt("D"));

// Solicita um número ao usuário e converte para número inteiro
// let numero = parseInt(prompt("Digite um número:"));

// Verifica se o número é divisível por 2 usando o operador de módulo (%)
// if (numero % 2 === 0) {
  // Se o resto da divisão por 2 for zero, o número é par
//   console.log("O número é par");
// } else {
  // Se o resto da divisão por 2 for diferente de zero, o número é ímpar
//   console.log("O número é ímpar");
// }


// 5 - Cálculo de Média:
// Receba três notas de um aluno, calcule a média e exiba "Aprovado" se for 7 ou mais, "Recuperação" se for entre 5 e 6.9, e "Reprovado" se for abaixo de 5.

// Solicita as três notas e converte para número com ponto flutuante
// let nota1 = parseFloat(prompt("Digite a primeira nota:"));
// let nota2 = parseFloat(prompt("Digite a segunda nota:"));
// let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Calcula a média das três notas
// let media = (nota1 + nota2 + nota3) / 3;

// Mostra a média com duas casas decimais
// console.log("Média: " + media.toFixed(2));

// Verifica a situação do aluno com base na média
// if (media >= 7) {
//   console.log("Aprovado");
// } else if (media >= 5) {
//   console.log("Recuperação");
// } else {
//   console.log("Reprovado");
// }


// Questão 6 - Desconto em Compra

// Solicita o valor da compra e converte para número com ponto flutuante
// let valorCompra = parseFloat(prompt("Digite o valor da compra:"));

// Verifica se o valor é maior que R$100
// if (valorCompra > 100) {
// Calcula 10% de desconto
// let desconto = valorCompra * 0.10;

// Subtrai o desconto do valor original
// let valorFinal = valorCompra - desconto;

// Exibe o valor com desconto formatado com duas casas decimais
// console.log("Desconto de 10% aplicado.");
// console.log("Valor final: R$" + valorFinal.toFixed(2));
// } else {
// Caso o valor seja R$100 ou menos, não há desconto
// console.log("Sem desconto.");
// console.

/// Questão 7 - Verificação de Ano Bissexto

// Solicita ao usuário que digite um ano e converte o valor para número inteiro
// let ano = parseInt(prompt("Digite um ano:"));

// Verifica se o ano é bissexto, de acordo com as regras do calendário gregoriano:
// 1. É (===) divisível (%) por 4 E (&&) não é (!==) divisível (%) por 100
//    OU (||)
// 2. É divisível por 400 (=== 0)
// if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {

  // Se a condição for verdadeira, o ano é bissexto
//   console.log(ano + " é um ano bissexto.");

// } else {

  // Se a condição for falsa, o ano não é bissexto
//   console.log(ano + " não é um ano bissexto.");
// }


// 8 - Acesso a um Sistema:
// Peça um nome de usuário e uma senha. Se forem "admin" e "1234", exiba "Acesso permitido", caso contrário, "Acesso negado".

// Pede ao usuário para digitar o nome de usuário
// let usuario = prompt("Digite o nome de usuário:");

// Pede ao usuário para digitar a senha
// let senha = prompt("Digite a senha:");

// Verifica se o nome de usuário é "admin" E a senha é "1234" Só se os dois forem exatamente iguais a essas strings, o acesso será permitido
// if (usuario === "admin" && senha === "1234") {
// Se os dois estiverem corretos, exibe mensagem de acesso permitido
// console.log("Acesso permitido");
// } else {
// Se qualquer um estiver incorreto, exibe mensagem de acesso negado
// console.log("Acesso negado");
// }

// 9 - Frete Grátis:
// Se o valor da compra for maior ou igual a R$200, ofereça frete grátis, caso contrário, cobre R$20.

// let valor = parseFloat(prompt("Digite o valor da compra:"));

// // Verifica se o valor da compra é maior ou igual a 200
// if (valor >= 200) {
// console.log("Frete grátis");
// } else {
// Caso contrário, cobra R$20 de frete
// let valorComFrete = valor + 20;
// console.log("Frete R$: 20");
// console.log("Valor total com frete: R$" + valorComFrete.toFixed(2));
// }

// 10 - Número dentro de um Intervalo:
// Solicite um número e exiba "Está no intervalo" se ele estiver entre 10 e 50, caso contrário, exiba "Fora do intervalo".


// Solicita que o usuário digite um número
// let numero = parseFloat(prompt("Digite um número:"));

// Verifica se o número está entre 10 e 50 (inclusive)
// if (numero >= 10 && numero <= 50) {
// Se estiver dentro do intervalo, exibe esta mensagem
// console.log("Está no intervalo");
// } else {
// Se não estiver dentro do intervalo, exibe esta mensagem
// console.log("Fora do intervalo");

