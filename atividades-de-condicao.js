// questão 1 

// let idade = 17;
// if(idade >= 18){
//     console.log("Maior de idade");
// }else{
//     console.log("Menor de idade");
// }

// questão 2

let numero = 12;

if(!numero || typeof numero != "number") {
  console.log("Digite um numero válido");
  return;

}




if(numero > 0){
  console.log(`${numero} é positivo`);
}else if(numero < 0){
   console.log(`${numero} é negativo`);
}else{
  console.log(`é zero`);
}



