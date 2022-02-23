/* 
   AULA DE VARIAVEIS
      Turma Hooks
*/

      /* SINTAXE BÁSICA */
//imprimir dados no console
console.log("Hello World!");

// receber um dado do usuario
const nome = prompt("Qual seu nome?")
console.log(nome)

/* 
         VARIAVEIS 
   const = constante / o valor NAO muda
   let = o valor pode mudar
*/

/* TIPOS DE VARIAVEIS
   Numbers = tudo sobre numeros
   String = caracteres de texto, numero e $#@%! => tem que ser usados entre "" ou ''. Ex: 'Tayanne'
   Boolean: true / false 
*/

// descobrir o tipo de uma variavel => typeof
console.log(typeof nome)

// variavel declarada mais valor nao definido => undefined
let algo 
console.log(algo) //undefined

// variavel declarada com valor nulo
// acredite se quiser, mas a gente usa o null kkkkk
let nulo = null
console.log(nulo) //null

/* 
   Conversão entre Tipos
   Number para String = variavel.toString()
   String para Number = Number(variavel)
*/

// numbero to string
const idade = 27
const idadeString = idade.toString()
console.log(typeof idade, typeof idadeString)

//string to number
const idadeSoQueString = "27"
const idadeSoQueNumber = Number(idadeSoQueString)
console.log(typeof idadeSoQueString, typeof idadeSoQueNumber)