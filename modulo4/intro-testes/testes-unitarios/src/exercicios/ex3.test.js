import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para arrays repetidos", () => {
        const temRepetido = checaItensDuplicados([1, 2, 3, 4, 5])
        expect(temRepetido).toContain(true)
    }) 
});

describe("Checa itens duplicados", () => {
	it("retorna true para '[1,1,1,2,3,4,5,5,6,7,8,8]'", () => {
	const res=checaItensDuplicados([1,1,1,2,3,4,5,5,6,7,8,8])
	expect(res).toEqual(true)
});
});
describe("Checa itens duplicados", () => {
	it("retorna false para '[1,2,3,4,5,6,7,8]'", () => {
	const res=checaItensDuplicados([1,2,3,4,5,6,7,8])
	expect(res).toEqual(false)
});
});
describe("Checa itens duplicados", () => {
	it("retorna false para '[]'", () => {
	const res=checaItensDuplicados([])
	expect(res).toEqual(false)
});
});
