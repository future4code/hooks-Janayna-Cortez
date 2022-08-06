//Pergunta
//a): como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//Resposta: Atribuindo à variável o process.argv[2], [3], em diante
//O process.argv contém um array de posição [0], cujo conteúdo é o próprio node
//A posição [1] contém o caminho para o arquivo atual
//A partir do índice [2] nós temos os argumentos que são passados pelo dev

//Ex1:
const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const somaAnos = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${somaAnos}`)

//========================================================================================================================================

//Ex2:
/* const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operacao){
	case "soma":
		num1 + num2
		break;
	case "sub":
		num1 - num2
		break;
    case "mult":
        num1 * num2
    case "div":
        num1 / num2
    default:
        console.log("Tente de novo")
}*/

//========================================================================================================================================

// EX03 :
/*Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.


let tarefas = ["Comprar Leite ", "Lavar o carro "]

const novaTarefa = process.argv[2]

tarefas.push(novaTarefa)


console.log("Tarefa adicionada com sucesso!")

console.log(`Lista de Tarefas: ${tarefas}`)*/

//========================================================================================================================================

//Ex4: