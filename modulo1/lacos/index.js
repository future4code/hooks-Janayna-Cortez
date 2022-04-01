// EXERCICIO INTERPRETAÇÃO DE CODIGO

// 1)
// i é 0, i menor que 5. Enquanto for menor que 5 vou atribuir mais 1 , ou seja chegara em 10

// 2)

// a) Será impresso no console todos os numeros maiores que 18
// b) 19, 21, 23, 25, 27, 30


// 3)

//Apareceriam 4 linhas sendo 
// linha 1 *
// linha 2 **
// linha 3 ***
// linha 4 ****

// exercicio de escrita

// 1)

let animais = Number(prompt("Quantos animais de estimação voce tem?"))
let pets = []
let contagem = 0 

if(animais === 0){
    console.log("Que pena! Voce pode adotar um pet!")
}
if (animais > 0){
    while(contagem < animais){	

        let nomeDosPets = prompt("Digite o nome dos seus pets:")
        pets.push(nomeDosPets)
        contagem ++

 }console.log(pets)
}

// 2)

//a)

let arrayOriginal = [10, 20, 30, 42, 51, 60, 78, 80,]

function imprimeArray(){
    console.log(arrayOriginal)
}
imprimeArray()

//b)

function dividePorDez(array){
 for (let numeros of array){
    console.log(numeros / 10)
  }
 }
 dividePorDez(arrayOriginal)

 // c)
 let arrayNovo = []
for (let index = 0; index < arrayOriginal.length; index++) {
    if (arrayOriginal[index] % 2 == 0) {
        arrayNovo.push(arrayOriginal[index])
    }
}
console.log(arrayNovo)
 
 
     // d)

     let i = 0;
     for (let numero of arrayOriginal) {
         console.log("O elemento do índex", i, "é:", numero);
         i = i + 1;
     }
 
     // e)
     function descobreMaiorMenor(array) {
         let maior = array[0];
         let menor = array[0];
         for (numeros of array) {
             if (numeros > maior) {
                 maior = numeros;
             }
             if (numeros < menor) {
                 menor = numeros;
             }
         }
         console.log(`O maior número é ${maior}`);
         console.log(`O maior número é ${menor}`);
     }
     descobreMaiorMenor(arrayOriginal);
 