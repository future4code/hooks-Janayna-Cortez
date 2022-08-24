enum Genero {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror"
}

type Catalogo = {
    nome: string,
    anoLançamento: number,
    genero: Genero,
    pontuação: number
}

const organizaCatalogo = (nome: string, anoLançamento: number, genero: Genero, pontuação?: number): Catalogo => {

	const filmes: Catalogo = {
		nome,
		anoLançamento,
		genero,
		pontuação,
	}

	return filmes

}

console.log(organizaCatalogo("Duna", 2021, Genero.ACAO, 84))
console.log(organizaCatalogo("Duna", 2021, Genero.ACAO))


