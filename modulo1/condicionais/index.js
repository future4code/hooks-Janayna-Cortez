

// Exercicios de Interpretação

// a  ) Aqui quer dizer que se o numero for divisor de 2 (resta 0)
// a resposta será uma  e se não fir divisor de 2 a resposta rserá outtra.

// b ) Quando for divisor de 2

// c ) Quando não for divisor de 2.

// exercicio 2

// a) o cliente irá colocar a fruta que quer saber o valor e ele irá mostrar o preço

// b) 2.25

// c ) O preço de fruta é 5

// exercicio 3

//a)  Pedindo ao usuario para responder a pergunta "Digite o primeiro numero"

//b) 10 "Esse numero passou no teste"
//   -10 erro de console

// c)Sim . 


// Exercicios codigo

// 1-

const idade = prompt("Qual a sua idade?")

if (idade < 18) {
    console.log("Você não pode dirigir")
}
else if (idade >= 18) 
{
console.log("Você pode dirigir")
}


// 2 -

let turno = prompt("Qual turno em que você estuda? M (matutino), V (vespertino) ou N (noturno)")

 if (turno = 'M') {
    console.log("Bom dia!")
}
 if (turno = 'V') {
    console.log("Boa Tarde!")
}
 if (turno = 'N') {
    console.log("Boa Noite")
}

// 3 - 

let turno = prompt("Qual turno em que você estuda? M (matutino), V (vespertino) ou N (noturno)")

 switch (turno){ 
case "M":
    console.log("Bom dia!")
    break;

 case "V":
    console.log("Boa Tarde!")
    break;

 case "N":
    console.log("Boa Noite")
    break;
 }

 // 4 )

 let genero = prompt("Qual o genero do filme?")
 let valor = prompt("Qual o valor do ingresso?")

 if (genero = 'fantasia' && valor < 15) {
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme!")
} 
   