/* EX03 :
Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.
*/

let tarefas = ["Comprar Leite ", "Lavar o carro "]

const novaTarefa = process.argv[2]

tarefas.push(novaTarefa)


console.log("Tarefa adicionada com sucesso!")

console.log(`Lista de Tarefas: ${tarefas}`)