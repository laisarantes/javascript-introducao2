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
//   console.log(`Média: ${media}, Parabéns você foi aprovado`);
// } else if (media >= 5) {
//   console.log(`Média: ${media}, Você está de recuperação`);
// } else {
//   console.log("`Média: ${media}, Você foi reprovado`");
// }


//Questão 6 - Desconto em Compra

//Solicita o valor da compra e converte para número inteiro (ponto flutuante)
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
// console.log(`Valor a pagar: R$ ${(valor).toFixed(2)}`);
// }

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


// 8 - Acesso a um Sistema: .
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
// console.log(`O numero ${numero} está no intervalo entre 10 e 50`);
// } else {
// Se não estiver dentro do intervalo, exibe esta mensagem
// console.log("Fora do intervalo");

// Exercício 11 – Verificação de Nota Válida
// Peça uma nota de 0 a 10. Se for válida, exiba "Nota registrada", caso contrário, mostre "Nota inválida".

// let nota = parseFloat(prompt("Digite uma nota"));

// let nota = parseFloat(prompt("Digite uma nota:"));

// if (nota >= 0 && nota <= 10) {
//   console.log("Nota válida");
// } else {
//   console.log("Nota inválida");
// }


// Exercício 12 – Categoria de Idade
// Peça a idade e exiba a categoria:

// 0 a 12: "Criança"

// 13 a 17: "Adolescente"

// 18 a 59: "Adulto"

// 60 ou mais: "Idoso"


// Solicita ao usuário que digite a idade e converte para número inteiro
// let idade = parseInt(prompt("Digite sua idade:"));

// Verifica se a idade está entre 0 e 12 (inclusive)
// if (idade >= 0 && idade <= 12) {
//   console.log("Criança");
// }
// Se não for criança, verifica se está entre 13 e 17
// else if (idade >= 13 && idade <= 17) {
//   console.log("Adolescente");
// }
// Se não for adolescente, verifica se está entre 18 e 59
// else if (idade >= 18 && idade <= 59) {
//   console.log("Adulto");
// }
// Se nenhuma das anteriores for verdadeira, então é 60 ou mais
// else {
//   console.log("Idoso");
// }

// Exercício 13 – Comparação de Três Números
// Peça três números e informe:
// O maior
// O menor
// Se algum deles for igual

// Solicita três números ao usuário
// let numero1 = parseFloat(prompt("Digite o primeiro número:"));
// let numero2 = parseFloat(prompt("Digite o segundo número:"));
// let numero3 = parseFloat(prompt("Digite o terceiro número:"));

// Compara os três números para saber qual é o maior
// if (numero1 >= numero2 && numero1 >= numero3) {
//   console.log("O maior número é:", numero1);
// } else if (numero2 >= numero1 && numero2 >= numero3) {
//   console.log("O maior número é:", numero2);
// } else {
//   console.log("O maior número é:", numero3);
// }

// Exercício 14 – Login Simples com Tentativas
// Permita até 3 tentativas para digitar o usuário e senha corretos ("admin" / "1234").
// Se acertar, exibe "Acesso permitido". Se errar 3 vezes, exibe "Conta bloqueada".

// let tentativas = 0; Começa com zero tentativas

// while (tentativas < 3) {
  // Pede usuário e senha
//   let usuario = prompt("Digite o nome de usuário:");
//   let senha = prompt("Digite a senha:");

  // Verifica se estão corretos
//   if (usuario === "admin" && senha === "1234") {
//     console.log("Acesso permitido");
//     break; // Sai do laço se acertar
//   } else {
//     console.log("Usuário ou senha incorretos.");
//     tentativas++; // Soma mais uma tentativa
//   }
// }

// Se tentou 3 vezes e ainda não acertou, bloqueia
// if (tentativas === 3) {
//   console.log("Conta bloqueada");
// }


// Exercício 15 – Verificação de Triângulo

 // Pede os lados do triângulo
// let lado1 = parseFloat(prompt("Digite o lado 1:"));
// let lado2 = parseFloat(prompt("Digite o lado 2:"));
// let lado3 = parseFloat(prompt("Digite o lado 3:"));

// // Verifica se forma um triângulo: a soma de dois lados > o terceiro para todos os casos
// if (
//   lado1 + lado2 > lado3 &&
//   lado1 + lado3 > lado2 &&
//   lado2 + lado3 > lado1
// ) {
//   // Se for triângulo, verifica o tipo
//   if (lado1 === lado2 && lado2 === lado3) {
//     console.log("Triângulo Equilátero");
//   } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
//     console.log("Triângulo Isósceles");
//   } else {
//     console.log("Triângulo Escaleno");
//   }
// } else {
//   console.log("Não é possível formar um triângulo");
// }


// Exercício 16 – Mês por Número

// let mes = parseInt(prompt("Digite um número de 1 a 12 para o mês:"));

// switch (mes) {
//   case 1:
//     console.log("Janeiro");
//     break;
//   case 2:
//     console.log("Fevereiro");
//     break;
//   case 3:
//     console.log("Março");
//     break;
//   case 4:
//     console.log("Abril");
//     break;
//   case 5:
//     console.log("Maio");
//     break;
//   case 6:
//     console.log("Junho");
//     break;
//   case 7:
//     console.log("Julho");
//     break;
//   case 8:
//     console.log("Agosto");
//     break;
//   case 9:
//     console.log("Setembro");
//     break;
//   case 10:
//     console.log("Outubro");
//     break;
//   case 11:
//     console.log("Novembro");
//     break;
//   case 12:
//     console.log("Dezembro");
//     break;
//   default:
//     console.log("Mês inválido");
// }


// Exercício 17 – Conversor de Notas

// let nota = parseFloat(prompt("Digite a nota (0 a 10):"));

// if (nota >= 9 && nota <= 10) {
//   console.log("Conceito A");
// } else if (nota >= 7 && nota < 9) {
//   console.log("Conceito B");
// } else if (nota >= 5 && nota < 7) {
//   console.log("Conceito C");
// } else if (nota >= 3 && nota < 5) {
//   console.log("Conceito D");
// } else if (nota >= 0 && nota < 3) {
//   console.log("Conceito E");
// } else {
//   console.log("Nota inválida");
// }


