// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
    
return array.length
}


// EXERCÍCIO 02

function retornaArrayInvertido(array) {

    return array.reverse()
} 


// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
    function compararNumeros(a, b) {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        } else {
            return 0
        }   
}
return array.sort(compararNumeros)
} 

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter((num) => {
        return num % 2 === 0
    })
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = []
    for(let pares of array) {
        if(pares % 2 === 0){
            arrayPares.push(pares ** 2)
        }
    }
    return arrayPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
        let maior = 0
    for(let numero of array){
        if(numero > maior) {
            maior = numero
        }
    }
    return maior
  }

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumero = Math.max(num1,num2)
  const menorNumero = Math.min(num1,num2)
  const objeto = {
  maiorNumero : maiorNumero,
  maiorDivisivelPorMenor : maiorNumero % menorNumero === 0,
  diferenca : maiorNumero - menorNumero,
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for(let i = 0; i < n; i++){
        numerosPares.push(2 * i)
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        triangulo = "Equilátero"
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        triangulo = "Escaleno"
    } else {
        triangulo = "Isósceles"
    }
    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let segundoNumero = array.sort((primeiro, segundo) => {
        return primeiro - segundo
    })
    let novoArray = [segundoNumero[segundoNumero.length - 2], segundoNumero[1]]
    return novoArray 
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const escondeNome = {
        ...pessoa,
        nome: "Anônimo"
    }
    return escondeNome
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = []
    for (pessoa of pessoas) {
        if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            pessoasAutorizadas.push(pessoa)
        }
    } return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = []
    for (pessoa of pessoas) {
        if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            pessoasNaoAutorizadas.push(pessoa)
        }
    } return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (obj of contas) {
        for (compra of obj.compras) {
            obj.saldoTotal = obj.saldoTotal - compra
        }
        obj.compras = []
    } return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let ordenar = (arrayA, arrayB) => {
        if (arrayA.nome < arrayB.nome) {
            return -1
        } else if (arrayA.nome > arrayB.nome) {
            return 1
        }

        return 0
    }

    return consultas.sort(ordenar)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
}
