import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna false para 'copo'", () => {
    const ehPalindromo = checaPalindromo("copo");
    expect(ehPalindromo).toEqual(false);
  });

  it("retorna true para 'ovo'", () => {
    const ehPalindromo = checaPalindromo("ovo");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna false para 'teclado'", () => {
    const ehPalindromo = checaPalindromo("teclado");
    expect(ehPalindromo).toEqual(true);
  });
  
});

