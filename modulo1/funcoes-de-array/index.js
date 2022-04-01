
// Exercicio de interpretação

 // 1 ) vai mostrar toda a estrutura do usuario (item, index,array)

 // 2 ) Vai retornar somente os nomes do usuario

 // 3 ) Vai retornar tudo que nao tenha Chijo

 // Exercicio de escrita

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const arrayDog = pets.map((item, index,array) =>{
 return item.nome 
})
console.log(arrayDog)


const racaSalsicha = pets.filter((pets) => {
    return pets.raca === 'Salsicha'
  })
  console.log(racaSalsicha)


const racaPoo = pets.filter((nome) => {
        return pets.raca === 'Poodle'

        console.log(racaPoo)
})   

const Poodle = (item) => {
  if (item.raca == 'Poodle'){
             console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
         }
     }
 const cao = pets.map(Poodle)

 // exercicio 2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
   
 // a)

const nomeItem = produtos.map((item, index,array) =>{
    return item.nome 
   })
   console.log(nomeItem)

// b)

   function desc (number) {
       return number.preco * (95/100)
    }
    const resultado = produtos.map(desc) 
    console.log(resultado)


 const nomesProdutosValor = produtos.map((item) => {
     return nomeItem.resultado
   })
     console.log(nomesProdutosValor)


 // c)

   const produtoBebida = produtos.filter((produto) => {
    return produto.categoria === 'Bebidas'
  })
  console.log(produtoBebida)


// d)
const Ype = (item) => {
      return item.nome.includes('Ypê')
     }
    
     const marca = produtos.filter(Ype)
     console.log(marca)


// e)

const compreYpe = (item) => {
       if (item.nome.includes('Ypê')){
           console.log(`Compre ${item.nome} por ${item.preco} `)
       }        
    }
 const imprimi = produtos.map(compreYpe)





  