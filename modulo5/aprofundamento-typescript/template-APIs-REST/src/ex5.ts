//Ex5:
//a versão do ecmascript que utilizamos é mais atual que a do enunciado
//sourceMap, que cria um arquivo .map;
//ourDir que estabelece a pasta build como a responsável por guardar os arquivos transpilados
//rootDir: que estabelece em qual pasta os arquivos . ts devem ficar.

// Desafio  ex:5

 type consultas = {
   nome: string,
   idade: number,
   dataDaConsulta: string
 }[]

 const listaConsultas: consultas = [
   { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
   { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
 ]

 function arrayDeConsultas(
   listaConsultas: consultas[]
 ) :{} {

   const listaOrdem = listaConsultas.map((cliente) => {
     return cliente.sort()
   })

   return listaOrdem
 }