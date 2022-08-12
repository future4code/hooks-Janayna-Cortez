//====================================================================================
//Ex1:

//1-A:
//let minhaString: string = 32;
//Ao atribuirmos um número a uma variável tipada como string o VSCode já aponta um erro
//Isto porque o Typescript é uma linguagem fortemente tipada e possui tipagem estática
//Significa que, após a definição do tipo da variável pelo desenvolvedor,
//ele fica impedido de atribuir um valor cujo tipo seja diferente daquele estabelecido.

//====================================================================================
//1-B:
let meuNumero: number | string;
//Para atribuirmos mais de um tipo a uma variável nós utilizamos o Union Type => "|"
// O símbolo de "|" tem valor de "ou", como o "||" do JS

//====================================================================================
//1-B:
let person: { name: string; age: number; favoriteColor: string } = {
  name: "Camis",
  age: 23,
  favoriteColor: "azul",
};
type person = {
  name: string | undefined;
  age: number | undefined;
  favoriteColor: string | undefined;
};

enum Rainbow {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}

const astroGil: person = {
  name: "Gilda",
  age: 57,
  favoriteColor: Rainbow.ANIL,
};

const astroMila: person = {
  name: "Camila",
  age: 23,
  favoriteColor: Rainbow.VERMELHO,
};

const astroLane: person = {
  name: "Crislane",
  age: 30,
  favoriteColor: Rainbow.AZUL,
};
const astroZe: person = {
  name: "Jose",
  age: 53,
  favoriteColor: Rainbow.VERDE,
};