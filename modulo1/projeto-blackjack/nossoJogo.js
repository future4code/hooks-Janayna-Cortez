
  alert(`Boas vindas ao jogo de Blackjack!`);

  if (confirm(`Quer iniciar uma nova rodada?`)) {
     iniciaJogo();
  } else {
     console.log(`Jogo encerrado.`)
  }
  
       
  function calcularCartas() {     
     const primeiraCarta = comprarCarta();
     const segundaCarta = comprarCarta();
     const pontosDaRodada = primeiraCarta.valor + segundaCarta.valor;
     
       return {
        carta1: (`primeiraCarta`),
        carta2: (`segundaCarta`),
        pontos: pontosDaRodada
     }
  }
  

    function iniciaJogo() {
     const usuario = calcularCartas();
     const computador = calcularCartas();
     console.log(`Usuário » cartas: ${usuario.carta1.naipe} ${usuario.carta2.naipe} - total de pontos: ${usuario.pontos}.`)
     console.log(`Computador » cartas: ${computador.carta1.naipe} ${computador.carta2.naipe} - total de pontos: ${computador.pontos}.`)
     if ((usuario.pontos > computador.pontos) && (usuario.pontos <= 21)) {
        console.log(`Resultado » O usuário ganhou!`);
     } else if ((computador.pontos > usuario.pontos) && (computador.pontos <= 21)) {
        console.log(`Resultado » O computador ganhou!`);
     } else {
        console.log(`Resultado » Empate.`);
      }
   }
