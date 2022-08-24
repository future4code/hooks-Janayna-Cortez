const variableType = (type: any): void => {
    if (Array.isArray(type) === true) {
      console.log(`A variável ${type} é um array`)
    } else {
      switch (typeof type) {
        case "string":
          console.log(`A variável ${type} é uma string`)
          break
        case "number":
          console.log(`A variável ${type} é um number`)
          break
        case "boolean":
          console.log(`A variável ${type} é um booleano`)
          break
        case "object":
          console.log(`A variável ${type} é um objeto`)
          break
        case "function":
          console.log(`A variável ${type} é uma função`)
          break
        default:
          console.log("Não é uma variável válida")
      }
    }
  }
  
  variableType([])